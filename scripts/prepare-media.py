"""
Asset pipeline: source download -> optimised local file -> typed media registry.

Reads the raw Radiantly Alive downloads (one file per key, see SOURCE_DIR),
resizes/compresses them into public/images/<category>/<name>.jpg and writes
src/data/media.ts with intrinsic dimensions, alt text and a tiny blur
placeholder for every image. Re-run after adding or replacing an asset:

    python scripts/prepare-media.py <path-to-raw-downloads>

Requires Pillow.
"""

import base64
import io
import json
import os
import sys

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCE_DIR = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, '.media-source')
PUBLIC_DIR = os.path.join(ROOT, 'public', 'images')
REGISTRY = os.path.join(ROOT, 'src', 'data', 'media.ts')

# registry key -> (source key, max width, alt text)
MEDIA = {
    # hero / brand
    'heroJungleShala': ('classes/everyone-community-class', 2400, 'Students meditating together in an open-air jungle shala at Radiantly Alive, Ubud'),
    'introShalaPractice': ('hero/ubud-shala-practice', 1400, 'A class kneeling in stillness on red mats in a wooden shala surrounded by jungle'),
    'teacherAssisting': ('general/teacher-assisting', 2000, 'A teacher offering a hands-on assist during a class in the Ubud studio'),
    # bali / ubud
    'ubudRiceTerraces': ('retreats/retreats-bg', 2400, 'Terraced rice fields and coconut palms in the hills around Ubud, Bali'),
    'ubudAerialFields': ('trainings/bali-immersion', 900, 'Aerial view of green rice fields stretching toward Mount Agung'),
    'templePurification': ('retreats/water-inspire', 2400, 'A woman receiving a water purification blessing at a Balinese temple spring'),
    # community
    'communityEmbrace': ('community/community-circle', 1500, 'A group of students holding each other in a warm, tight embrace'),
    'communityJoy': ('community/leadership-ceremony-90', 2000, 'Teachers and students laughing and posing together in the jungle shala'),
    'ceremonyCircle': ('trainings/opening-ceremony-l2', 2000, 'A teacher training opening ceremony circle around a flower mandala'),
    'ceremonyMandala': ('community/leadership-ceremony-88', 2000, 'Students seated around a Balinese flower mandala during an opening ceremony'),
    'graduationWhite': ('trainings/closing-ceremony-126', 2000, 'A teacher training cohort dressed in white at their closing ceremony'),
    'graduationDance': ('trainings/closing-ceremony-147', 2000, 'Graduates dancing and laughing in white at a closing ceremony'),
    'cohortPanorama': ('trainings/ytt-group', 2400, 'A full teacher training cohort cheering in front of an ancient stone wall'),
    'openAirPractice': ('community/women-open-air-shala', 1200, 'Students sharing a quiet moment on their mats in an open-air shala'),
    # trainings
    'trainingSadhana': ('trainings/sadhana-200hr', 2000, 'A lead teacher adjusting students during a morning sadhana practice'),
    'trainingAssist': ('trainings/teacher-guide-assist', 2000, 'A teacher guiding a student into a forward fold with gentle touch'),
    'trainingCeremony': ('trainings/opening-ceremony-30', 2000, 'A large circle of trainees in the jungle shala during an opening ceremony'),
    'trainingJungleShala': ('trainings/300hr-jungle-shala', 2000, 'Trainees in a standing practice inside the glass-walled jungle shala'),
    'trainingArtOfTeaching': ('trainings/espanol-art-of-teaching', 2000, 'Trainees practising warrior poses during an art-of-teaching session'),
    'trainingTeachingLab': ('trainings/300hr-teaching-200hr', 1800, 'Advanced trainees teaching and laughing with a small group'),
    'trainingAsanaExploration': ('trainings/asana-exploration', 1400, 'A teacher demonstrating a standing balance to trainees'),
    'trainingAsanaLab': ('trainings/espanol-asana-lab', 1300, 'Two trainees working on a posture together in the asana lab'),
    'trainingObservation': ('trainings/medium-3', 2000, 'Trainees observing and taking notes during a teaching practicum'),
    # studio / shalas
    'shalaRiver': ('studio/river-shala-2', 2000, 'The River Shala, a spacious wooden shala with red mats and jungle views'),
    'shalaRiverPortrait': ('studio/river-shala', 1400, 'Inside the River Shala, with lanterns and a Ganesha shrine'),
    'shalaJungle': ('studio/jungle-shala-glass', 2000, 'The Jungle Shala, with glass walls opening onto the rainforest'),
    'shalaBamboo': ('studio/bamboo-shala', 1400, 'A carved statue and offerings in the Bamboo Shala'),
    'shalaUpper': ('studio/upper-shala', 1400, 'The Upper Shala, the largest practice space, with a high timber roof'),
    'shalaSky': ('studio/sky-shala', 1400, 'The Sky Shala, set up with colourful aerial yoga hammocks'),
    'savasanaShala': ('classes/schedule-banner', 1600, 'A class resting in savasana in an open-sided shala'),
    # retreats
    'retreatMeditation': ('retreats/retreat-hero', 1200, 'A woman meditating alone on a wooden deck overlooking the jungle'),
    'retreatCoconut': ('retreats/r-1142', 1200, 'A woman relaxing by a pool with a fresh coconut'),
    'retreatBalcony': ('retreats/r-1577', 1200, 'A woman sipping tea on a balcony surrounded by greenery'),
    'retreatMassage': ('retreats/r-5563', 1200, 'A healing massage in a calm treatment room'),
    'retreatCafe': ('retreats/r-3529', 1200, 'Reading the menu at the plant-based Chandra Cafe'),
    # online
    'onlineHomeMeditation': ('online/home-meditation', 1800, 'A woman meditating at home in front of a laptop streaming a class'),
    'onlineHomePractice': ('online/home-practice-kneeling', 1800, 'A man practising a low lunge in his living room with an online class'),
    'onlineHomePortrait': ('online/home-practice-portrait', 1800, 'A woman with hands on her heart during an online practice at home'),
    'onlineAsana': ('online/asana', 800, 'A practitioner in a twisted downward dog in a bright studio'),
    'onlineMeditation': ('online/meditation', 800, 'A woman in prayer pose with eyes closed'),
    'onlineMobility': ('online/mobility', 800, 'A practitioner in a supported shoulder-opening stretch using a block'),
    'onlineSadhana': ('online/sadhana', 800, 'A group practising a flowing sequence in the shala'),
    # healings
    'healingHands': ('healings/healing-hero', 2000, 'A practitioner offering a gentle head and face healing treatment'),
    'healingEnergy': ('healings/healing-touch', 1200, 'A healer holding her hands above a resting client in an energy session'),
    # workshops (event posters: artwork contains baked-in text)
    'eventMysoreSeason': ('workshops/mysore-season', 1600, 'Bali Mysore Season and three week immersion with Kino MacGregor and Tim Feldmann'),
    'eventDhrupad': ('workshops/dhrupad', 1600, 'The Mystical Voice of Dhrupad, a three day immersive with Dhani Gundecha'),
    'eventEnergyMedicine': ('workshops/energy-medicine', 1600, 'Shamanic Reiki Energy Medicine Level 1 with Devi Ma'),
    'eventHimalayanKriya': ('workshops/himalayan-kriya', 1600, 'Himalayan Kriya Yoga Level 1 with Samten and Nora'),
    'eventAshtangaIntensive': ('workshops/ashtanga-intensive', 1600, 'Ashtanga Intensive with David Robson and Jelena Vasic'),
    'eventIntegratedBody': ('workshops/integrated-body', 1600, 'The Integrated Body with Brett Wearne'),
    'workshopsStudio': ('workshops/studio-workshops-bg', 1200, 'A workshop group practising beside a live musician in the jungle shala'),
    # teachers / team
    'teamEmbrace': ('teachers/team-hero', 2000, 'Radiantly Alive teachers in a group embrace'),
    'teamStaff': ('teachers/team-8008', 1700, 'The Radiantly Alive reception, housekeeping and office team'),
    'teacherAde': ('teachers/ade', 1000, 'Portrait of Ade, Ashtanga teacher'),
    'teacherAlexandra': ('teachers/alexandra', 800, 'Portrait of Alexandra, yoga philosophy teacher'),
    'teacherAnna': ('teachers/anna', 1000, 'Portrait of Anna, vinyasa teacher'),
    'teacherConstanza': ('teachers/constanza', 1200, 'Constanza holding a singing bowl in a sound healing space'),
    'teacherCorinne': ('teachers/corinne', 1000, 'Portrait of Corinne, yoga and meditation teacher'),
    'teacherDenise': ('teachers/denise', 300, 'Portrait of Denise, vinyasa and Inside Flow teacher'),
    'teacherDominika': ('teachers/dominika', 1000, 'Dominika standing on a palm-lined road'),
    'teacherEric': ('teachers/eric', 1000, 'Portrait of Eric, Ashtanga, Hatha and Kundalini teacher'),
    'teacherJoelle': ('teachers/joelle', 640, 'Portrait of Joëlle, vinyasa and yin teacher and training lead'),
    'teacherLaila': ('teachers/laila', 1000, 'Laila seated cross-legged against a warm wall'),
    'teacherLucinda': ('teachers/lucinda', 1000, 'Portrait of Lucinda, teacher and exercise physiologist'),
    'teacherMaximilien': ('teachers/maximilien', 480, 'Portrait of Maximilien in a bamboo shala'),
    'teacherMichael': ('teachers/michael', 1000, 'Portrait of Michael, meditation teacher and Ayurvedic practitioner'),
    'teacherNalya': ('teachers/nalya', 1000, 'Nalya in prayer pose in front of a carved Balinese door'),
    'teacherNaomi': ('teachers/naomi', 1200, 'Dr. Naomi seated in a garden setting'),
    'teacherNiken': ('teachers/niken', 750, 'Niken in prayer pose among tropical leaves'),
    'teacherNiko': ('teachers/niko', 1000, 'Portrait of Niko, vinyasa and Inside Flow teacher'),
    'teacherNirmoha': ('teachers/nirmoha', 1000, 'Portrait of Nirmoha, craniosacral and breathwork practitioner'),
    'teacherNitin': ('teachers/nitin', 1000, 'Nitin in prayer pose among tropical leaves'),
    'teacherRicardo': ('teachers/ricardo', 1000, 'Portrait of Ricardo, vinyasa and hatha teacher'),
    'teacherSamten': ('teachers/samten', 1000, 'Portrait of Samten, Himalayan Kriya Yoga lineage holder'),
    'teacherSaridewi': ('teachers/saridewi', 1000, 'Saridewi standing in a garden beside the studio'),
    'teacherZara': ('teachers/zara', 852, 'Zara seated on a mat in the jungle shala'),
}

# registry key -> public sub-folder
FOLDER = {
    'hero': 'hero', 'intro': 'general', 'teacherA': 'general', 'ubud': 'bali', 'temple': 'bali',
    'community': 'community', 'ceremony': 'community', 'graduation': 'community', 'cohort': 'community',
    'openAir': 'community', 'training': 'trainings', 'shala': 'studio', 'savasana': 'classes',
    'retreat': 'retreats', 'online': 'online', 'healing': 'healings', 'event': 'workshops',
    'workshops': 'workshops', 'team': 'teachers', 'teacher': 'teachers',
}


def folder_for(key):
    for prefix in sorted(FOLDER, key=len, reverse=True):
        if key.startswith(prefix):
            return FOLDER[prefix]
    raise KeyError(key)


def kebab(key):
    out = ''
    for ch in key:
        out += ('-' + ch.lower()) if ch.isupper() else ch
    return out


def blur(im):
    small = im.copy()
    small.thumbnail((16, 16))
    buf = io.BytesIO()
    small.save(buf, 'WEBP', quality=40)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()


entries = []
for key, (source, max_w, alt) in MEDIA.items():
    src_path = os.path.join(SOURCE_DIR, source.replace('/', '__') + '.img')
    im = ImageOps.exif_transpose(Image.open(src_path)).convert('RGB')
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    folder = folder_for(key)
    name = kebab(key) + '.jpg'
    os.makedirs(os.path.join(PUBLIC_DIR, folder), exist_ok=True)
    im.save(os.path.join(PUBLIC_DIR, folder, name), 'JPEG', quality=82, optimize=True, progressive=True)
    entries.append((key, f'/images/{folder}/{name}', im.width, im.height, alt, blur(im), source))

# Open Graph image: 1200x630 crop of the hero
hero = ImageOps.exif_transpose(Image.open(os.path.join(SOURCE_DIR, MEDIA['heroJungleShala'][0].replace('/', '__') + '.img'))).convert('RGB')
og = ImageOps.fit(hero, (1200, 630), Image.LANCZOS, centering=(0.5, 0.45))
os.makedirs(os.path.join(PUBLIC_DIR, 'og'), exist_ok=True)
og.save(os.path.join(PUBLIC_DIR, 'og', 'og-default.jpg'), 'JPEG', quality=82, optimize=True, progressive=True)

lines = [
    '// Generated by scripts/prepare-media.py. Do not edit by hand; edit the script and re-run.',
    '// Every asset originates from radiantlyalive.com (see SITE_ANALYSIS.md, section 7).',
    '',
    'export interface MediaAsset {',
    '  src: string',
    '  width: number',
    '  height: number',
    '  alt: string',
    '  blurDataURL: string',
    '}',
    '',
    'export const media = {',
]
for key, path, w, h, alt, b64, source in entries:
    lines.append(f'  {key}: {{ src: {json.dumps(path)}, width: {w}, height: {h}, alt: {json.dumps(alt, ensure_ascii=False)}, blurDataURL: {json.dumps(b64)} }},')
lines += ['} satisfies Record<string, MediaAsset>', '', 'export type MediaKey = keyof typeof media', '']
with open(REGISTRY, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

total = sum(os.path.getsize(os.path.join(dp, fn)) for dp, _, fns in os.walk(PUBLIC_DIR) for fn in fns)
print(f'{len(entries)} images written, {total / 1e6:.1f} MB total')
