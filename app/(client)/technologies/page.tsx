import React from 'react'
import TechStackSection from '@/app/sections/techstack-section'
import StickyBar from '@/components/StickyBar'
import PageWrapper from '@/app/page-wrapper'

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
