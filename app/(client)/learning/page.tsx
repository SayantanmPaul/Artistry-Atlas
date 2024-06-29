import React from 'react'
import StickyBar from '@/components/StickyBar'
import PageWrapper from '@/app/page-wrapper'
import LearningSection from '@/app/sections/learning-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Qualifications",
  description: "Academic qualification of myself, though I'm constantly learning new things in my life."
}
const Academic = () => {
  return (
    <>
    <div className='mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-4 lg:px-0 md:px-4 lg:pl-0'>
      <div className="min-w-[196px]">
        <StickyBar />
      </div>
    <PageWrapper>
      <div>
        <LearningSection/>
      </div>
    </PageWrapper>
    </div>
    </>  
  )
}

export default Academic
