import React from 'react'
import TechStackSection from '@/app/sections/techstack-section'
import StickyBar from '@/components/StickyBar'

const Technologies = () => {
  return (
    <>
    <div className="min-w-[196px]">
      <StickyBar />
    </div>
    <div>
      <TechStackSection/>
    </div>
    </>
  )
}

export default Technologies
