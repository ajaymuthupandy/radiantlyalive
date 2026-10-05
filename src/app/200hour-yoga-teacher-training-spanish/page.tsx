import { ContentPage, contentMetadata } from '@/components/templates/ContentPage'
import { page } from '@/content/pages/200hour-yoga-teacher-training-spanish'

export const metadata = contentMetadata(page)

export default function Page() {
  return <ContentPage page={page} />
}
