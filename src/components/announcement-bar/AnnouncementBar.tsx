import { ArrowRight } from 'lucide-react'
import { SmartLink } from '@/components/ui/SmartLink'
import { ANNOUNCEMENT } from '@/data/site'
import { DismissAnnouncement } from './DismissAnnouncement'

export const ANNOUNCEMENT_STORAGE_KEY = 'ra-announcement-dismissed'

/**
 * Runs in <head> before first paint: hides a bar the visitor already
 * dismissed, so it never flashes in and out.
 */
export const announcementScript = `try{if(localStorage.getItem('${ANNOUNCEMENT_STORAGE_KEY}')==='${ANNOUNCEMENT.id}')document.documentElement.dataset.announcement='dismissed'}catch(e){}`

/**
 * Promotional bar from the source site (message + link + close). Collapses
 * on scroll with the header and stays hidden once dismissed.
 */
export function AnnouncementBar() {
  if (!ANNOUNCEMENT.enabled) return null

  return (
    <div data-announcement-bar className="announcement grid">
      <div className="min-h-0 overflow-hidden">
        <div className="relative bg-crimson text-cream">
          <div className="container-x flex min-h-10 items-center justify-center gap-3 py-2 pr-12 text-center md:pr-14">
            <p className="type-meta">
              {ANNOUNCEMENT.message}{' '}
              <SmartLink
                href={ANNOUNCEMENT.link.href}
                className="group inline-flex items-center gap-1 font-semibold whitespace-nowrap text-cream underline decoration-cream/50 underline-offset-4 transition-colors hover:decoration-cream"
              >
                {ANNOUNCEMENT.link.label}
                <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </SmartLink>
            </p>
          </div>
          <DismissAnnouncement id={ANNOUNCEMENT.id} storageKey={ANNOUNCEMENT_STORAGE_KEY} />
        </div>
      </div>
    </div>
  )
}
