import React from 'react'
import AboutSection from '@/app/sections/about-section'
import StickyBar from '@/components/StickyBar'

//nextjs cacheing set to false
// export const dynamic = 'force-dynamic'
const Home = () => {
  return (
    <>
    <div className="min-w-[196px]">
      <StickyBar />
    </div>
    <div className='max-w-[770px]'>
      <AboutSection/>
    </div>
    </>
  )
}

export default Home