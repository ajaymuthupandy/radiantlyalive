import Image, { type ImageProps } from 'next/image'
import { media, type MediaKey } from '@/data/media'

type MediaProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'placeholder' | 'blurDataURL'> & {
  asset: MediaKey
  /** Override the registry alt text; pass "" for decorative images. */
  alt?: string
  /**
   * Aspect ratio (width / height) of the `fill` frame. When the photo is wider
   * than its frame, `object-cover` scales it past the frame width, so `sizes`
   * is widened to match and the browser picks a sharp enough variant.
   */
  frame?: number
  /** Extra height the image is given beyond the frame (e.g. 1.12 for a -6% parallax inset). */
  overscan?: number
}

/** Multiply the slot length of every `sizes` entry, leaving media conditions untouched. */
function scaleSizes(sizes: string, factor: number) {
  return sizes
    .split(',')
    .map((entry) =>
      entry.replace(/(\d+(?:\.\d+)?)(vw|px)\s*$/, (_, n: string, unit: string) => `${Math.ceil(Number(n) * factor)}${unit}`),
    )
    .join(',')
}

/**
 * next/image bound to the media registry: intrinsic dimensions (no CLS),
 * a blur placeholder and centrally maintained alt text for every asset.
 */
export function Media({ asset, alt, fill, frame, overscan = 1, sizes, quality = 85, ...rest }: MediaProps) {
  const item = media[asset]
  const dimensions = fill ? { fill: true as const } : { width: item.width, height: item.height }

  const coverScale = frame ? Math.max(1, (item.width / item.height / frame) * overscan) : 1
  const slotSizes = sizes && coverScale > 1.01 ? scaleSizes(sizes, coverScale) : sizes

  return (
    <Image
      src={item.src}
      alt={alt ?? item.alt}
      placeholder="blur"
      blurDataURL={item.blurDataURL}
      sizes={slotSizes}
      quality={quality}
      {...dimensions}
      {...rest}
    />
  )
}
