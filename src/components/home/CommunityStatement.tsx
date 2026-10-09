import { Media } from '@/components/ui/Media'
import { community } from '@/content/home'

/**
 * A full-bleed photograph of the community: a pause between chapters.
 * No headline over it; the tagline lives once, in the closing invitation,
 * and the social links live in the footer.
 */
export function CommunityStatement() {
  return (
    <figure className="relative h-[min(70vh,40rem)] min-h-[22rem] overflow-hidden bg-plum">
      <div data-parallax="0.16" className="absolute inset-x-0 -inset-y-[12%]">
        <Media asset={community.image} fill sizes="100vw" className="object-cover object-[50%_45%]" />
      </div>
    </figure>
  )
}
