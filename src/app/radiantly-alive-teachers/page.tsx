import { ContentPage, contentMetadata } from '@/components/templates/ContentPage'
import { page } from '@/content/pages/radiantly-alive-teachers'

export const metadata = contentMetadata(page)

export default function Page() {
  return <ContentPage page={page} />
}
