import React from 'react'
import AboutSection from '@/app/sections/about-section'
import StickyBar from '@/components/StickyBar'
import PageWrapper from '../page-wrapper'

//nextjs cacheing set to false
// export const dynamic = 'force-dynamic'
const Home = () => {
  return (
    <>
      <PageWrapper>
      <div className='mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-4 lg:px-0 md:px-4 lg:pl-0'>
      <div className="min-w-[196px]">
        <StickyBar />
      </div>
      <div className='max-w-[770px]'>
        <div>
          <AboutSection/>
        </div>
      </div>
      </div>
      </PageWrapper>
    </>
  )
}

export default Home