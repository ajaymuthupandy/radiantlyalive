import type { Metadata } from 'next'
import { CtaBand } from '@/components/blocks/MediaBlocks'
import { HomeHero } from '@/components/hero/HomeHero'
import { CommunityStatement } from '@/components/home/CommunityStatement'
import { MovementFeature } from '@/components/home/MovementFeature'
import { OnlinePractice } from '@/components/home/OnlinePractice'
import { ReviewsSection } from '@/components/home/ReviewsSection'
import { StudioHome } from '@/components/home/StudioHome'
import { TeachersRail } from '@/components/home/TeachersRail'
import { TrainingFeature } from '@/components/home/TrainingFeature'
import { BrandIntro } from '@/components/sections/BrandIntro'
import { finalCta } from '@/content/home'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: { absolute: 'Radiantly Alive Yoga Studio | An inspiring and loving community' },
  description: SITE.description,
  alternates: { canonical: '/' },
}

/**
 * Homepage: the source homepage's sections in order (hero, vision, Bali
 * studio, teacher trainings, community, online studio), extended with the
 * Teachers and RA Movement chapters, graduate words and a closing invitation.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandIntro />
      <StudioHome />
      <TrainingFeature />
      <CommunityStatement />
      <OnlinePractice />
      <TeachersRail />
      <MovementFeature />
      <ReviewsSection />
      <CtaBand blockKey="home-final" type="cta" heading={finalCta.heading} text={finalCta.text} image={finalCta.image} ctas={[...finalCta.ctas]} />
    </>
  )
}
