import { Fragment } from 'react'
import { SmartLink } from '@/components/ui/SmartLink'
import type { RichText } from '@/content/types'

const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g
const ESCAPED_STAR = '\u0000'

/**
 * Renders the content model's inline markup: *italic*, **bold** and
 * [label](href). A literal asterisk is written as \*.
 */
export function Rich({ text }: { text: RichText }) {
  const source = text.replace(/\\\*/g, ESCAPED_STAR)
  const restore = (s: string) => s.replaceAll(ESCAPED_STAR, '*')

  return (
    <>
      {source.split(TOKEN).map((part, i) => {
        if (!part) return null
        let m = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
        if (m) {
          return (
            <SmartLink
              key={i}
              href={m[2]}
              className="underline decoration-current/35 underline-offset-[0.2em] transition-colors hover:decoration-current"
            >
              {restore(m[1])}
            </SmartLink>
          )
        }
        m = part.match(/^\*\*([^*]+)\*\*$/)
        if (m) return <strong key={i} className="font-semibold">{restore(m[1])}</strong>
        m = part.match(/^\*([^*]+)\*$/)
        if (m) return <em key={i}>{restore(m[1])}</em>
        return <Fragment key={i}>{restore(part)}</Fragment>
      })}
    </>
  )
}

/** Plain-text version for metadata and aria labels. */
export function plain(text: RichText) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|[^\\])\*([^*]+)\*/g, '$1$2')
    .replace(/\\\*/g, '*')
}
