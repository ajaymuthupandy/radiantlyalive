import { ContentPage, contentMetadata } from '@/components/templates/ContentPage'
import { page } from '@/content/pages/200hr-yoga-teacher-training-ra-vinyasa-ubud'

export const metadata = contentMetadata(page)

export default function Page() {
  return <ContentPage page={page} />
}
