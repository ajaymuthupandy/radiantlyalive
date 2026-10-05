import { ContentPage, contentMetadata } from '@/components/templates/ContentPage'
import { page } from '@/content/pages/ra-online-monthly-membership'

export const metadata = contentMetadata(page)

export default function Page() {
  return <ContentPage page={page} />
}
