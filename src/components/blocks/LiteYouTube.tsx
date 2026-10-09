'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

/**
 * Click-to-play YouTube film: a thumbnail and a real button until the
 * visitor asks for it, then the no-cookie player. Nothing is loaded from
 * YouTube's player before that.
 */
export function LiteYouTube({ youtubeId, title, playLabel }: { youtubeId: string; title: string; playLabel: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden rounded-frame bg-plum">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 size-full text-cream">
          <Image
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover opacity-80 transition-[opacity,transform] duration-700 group-hover:scale-[1.03] group-hover:opacity-95"
          />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/10 to-transparent" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-18 place-items-center rounded-full bg-cream/95 text-plum shadow-lg transition-transform duration-500 group-hover:scale-110">
              <Play aria-hidden className="ml-1 size-6 fill-current" />
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-5 type-h3 text-left">{title}</span>
          <span className="sr-only">
            {playLabel}: {title}
          </span>
        </button>
      )}
    </div>
  )
}
