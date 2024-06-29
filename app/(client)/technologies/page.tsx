import React from 'react'
import TechStackSection from '@/app/sections/techstack-section'
import StickyBar from '@/components/StickyBar'
import PageWrapper from '@/app/page-wrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Technologies",
  description: "Does language matters? my answer would be yes and no at the same time, I'm in a phase of learning about adaptivity, code refactoring, improving code quality etc."
}
const Technologies = () => {
  return (
    <>
    <div className='mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-4 lg:px-0 md:px-4 lg:pl-0'>
      <div className="min-w-[196px]">
      <StickyBar />
    </div>
    <PageWrapper>
    <div>
      <TechStackSection/>
    </div>
    </PageWrapper>
    </div>
    </>
  )
}

export default Technologies
