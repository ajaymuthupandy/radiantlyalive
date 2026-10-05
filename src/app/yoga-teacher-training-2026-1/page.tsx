import { ContentPage, contentMetadata } from '@/components/templates/ContentPage'
import { page } from '@/content/pages/yoga-teacher-training-2026-1'

export const metadata = contentMetadata(page)

export default function Page() {
  return <ContentPage page={page} />
}
