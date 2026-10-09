import { Media } from '@/components/ui/Media'
import { community } from '@/content/home'

/**
 * A full-bleed photograph of the community: a pause between chapters,
 * opening from an inset window to full width as it scrolls into view.
 * No headline over it; the tagline lives once, in the closing invitation,
 * and the social links live in the footer.
 */
export function CommunityStatement() {
  return (
    <div className="bg-plum">
      <figure className="relative h-[min(62vh,36rem)] min-h-[20rem] overflow-hidden" data-window>
        <Media asset={community.image} fill sizes="100vw" className="object-cover object-[50%_45%]" />
      </figure>
    </div>
  )
}
