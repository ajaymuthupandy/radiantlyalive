import { ContentPage, contentMetadata } from '@/components/templates/ContentPage'
import { page } from '@/content/pages/200h-ytt-ra-vinyasa-hybrid-bali-eng'

export const metadata = contentMetadata(page)

export default function Page() {
  return <ContentPage page={page} />
}
