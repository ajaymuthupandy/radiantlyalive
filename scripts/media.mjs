/**
 * Asset pipeline: Radiantly Alive source URL -> optimised local file -> typed registry.
 *
 * Every image the site renders is listed in a manifest under scripts/media/*.json:
 *
 *   { "key": "shalaRentalRiver",                      // registry key used as <Media asset="…" />
 *     "url": "https://images.squarespace-cdn.com/…",  // optional: radiantlyalive.com source
 *     "file": "public/assets/studio/shala-rental-river.jpg",
 *     "maxWidth": 2500,                               // optional, default 2500
 *     "crop": { "left": 0, "top": 0.08, "width": 1, "height": 0.84 },  // optional, fractions of the source
 *     "alt": "Describe the photograph" }
 *
 * Entries with a `url` are downloaded once into .media-cache/ and resized into
 * `file` (JPEG, mozjpeg q88: next/image re-encodes every request, so the master
 * stays close to the source). Entries without one must already exist on disk.
 * The script then writes src/data/media.ts with intrinsic dimensions and a
 * tiny blur placeholder for each asset.
 *
 *   node scripts/media.mjs            # process new entries, rebuild registry
 *   node scripts/media.mjs --force    # re-download and re-encode everything with a url
 *   node scripts/media.mjs --reencode # re-encode everything with a url from the cache
 */
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const MANIFEST_DIR = path.join(ROOT, 'scripts', 'media')
const CACHE_DIR = path.join(ROOT, '.media-cache')
const REGISTRY = path.join(ROOT, 'src', 'data', 'media.ts')
const FORCE = process.argv.includes('--force')
const REENCODE = FORCE || process.argv.includes('--reencode')

async function loadManifest() {
  const files = (await readdir(MANIFEST_DIR)).filter((f) => f.endsWith('.json')).sort()
  const entries = []
  const seen = new Map()
  for (const file of files) {
    const list = JSON.parse(await readFile(path.join(MANIFEST_DIR, file), 'utf8'))
    for (const entry of list) {
      if (seen.has(entry.key)) throw new Error(`Duplicate media key "${entry.key}" in ${file} and ${seen.get(entry.key)}`)
      seen.set(entry.key, file)
      entries.push(entry)
    }
  }
  return entries
}

async function download(url) {
  const name = createHash('sha1').update(url).digest('hex').slice(0, 16)
  const cached = path.join(CACHE_DIR, name)
  if (existsSync(cached) && !FORCE) {
    const buffer = await readFile(cached)
    if (buffer.length) return buffer
  }

  // Squarespace serves the original upload with ?format=original; fall back to 2500w.
  const base = url.split('?')[0]
  for (const candidate of [`${base}?format=2500w`, `${base}?format=original`, url]) {
    const res = await fetch(candidate, { headers: { 'User-Agent': 'Mozilla/5.0 (asset pipeline)' } })
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer())
      if (!buffer.length) continue
      await mkdir(CACHE_DIR, { recursive: true })
      await writeFile(cached, buffer)
      return buffer
    }
  }
  throw new Error(`Download failed: ${url}`)
}

async function processEntry(entry) {
  const out = path.join(ROOT, entry.file)
  if (entry.url && (REENCODE || !existsSync(out))) {
    const input = await download(entry.url)
    await mkdir(path.dirname(out), { recursive: true })
    let pipeline = sharp(input).rotate()
    if (entry.crop) {
      // Crop is given in fractions so it survives a higher-resolution re-download.
      const { width, height } = await sharp(input).rotate().metadata()
      const { left, top, width: w, height: h } = entry.crop
      pipeline = sharp(await pipeline.toBuffer()).extract({
        left: Math.round(left * width),
        top: Math.round(top * height),
        width: Math.round(w * width),
        height: Math.round(h * height),
      })
    }
    pipeline = pipeline.resize({ width: entry.maxWidth ?? 2500, withoutEnlargement: true })
    // .png keeps transparency (badges, marks); everything else is a photograph.
    if (out.endsWith('.png')) await pipeline.png({ compressionLevel: 9, palette: true }).toFile(out)
    else await pipeline.flatten({ background: '#f4eee3' }).jpeg({ quality: 88, mozjpeg: true, progressive: true }).toFile(out)
    console.log(`  + ${entry.file}`)
  }
  if (!existsSync(out)) throw new Error(`Missing file for "${entry.key}": ${entry.file}`)

  const image = sharp(out)
  const { width, height } = await image.metadata()
  const blur = await sharp(out).resize(16, 16, { fit: 'inside' }).webp({ quality: 40 }).toBuffer()
  return {
    key: entry.key,
    src: '/' + path.relative(path.join(ROOT, 'public'), out).split(path.sep).join('/'),
    width,
    height,
    alt: entry.alt,
    blurDataURL: `data:image/webp;base64,${blur.toString('base64')}`,
  }
}

async function main() {
  const entries = await loadManifest()
  const results = []
  // Small batches: polite to the CDN, fast enough locally.
  for (let i = 0; i < entries.length; i += 6) {
    results.push(...(await Promise.all(entries.slice(i, i + 6).map(processEntry))))
  }

  const lines = results.map(
    (r) =>
      `  ${r.key}: { src: ${JSON.stringify(r.src)}, width: ${r.width}, height: ${r.height}, alt: ${JSON.stringify(r.alt)}, blurDataURL: ${JSON.stringify(r.blurDataURL)} },`,
  )
  const source = `// Generated by scripts/media.mjs from scripts/media/*.json. Do not edit by hand.
// Every asset originates from radiantlyalive.com (see SITE_INVENTORY.md, "Assets").

export interface MediaAsset {
  src: string
  width: number
  height: number
  alt: string
  blurDataURL: string
}

export const media = {
${lines.join('\n')}
} satisfies Record<string, MediaAsset>

export type MediaKey = keyof typeof media
`
  await writeFile(REGISTRY, source)
  console.log(`Wrote ${results.length} assets to src/data/media.ts`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
