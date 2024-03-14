import React from 'react'
import AboutSection from '@/app/sections/about-section'
//nextjs cacheing set to false
// export const dynamic = 'force-dynamic'
const Home = () => {
  return (
    <div className='max-w-[770px]'>
      <AboutSection/>
    </div>
  )
}

export default Home