import React from 'react'
import CareerSection from '@/app/sections/career-section'
import StickyBar from '@/components/StickyBar'
const Career = () => {
  return (
    <>
    <div className="min-w-[196px]">
      <StickyBar />
    </div>
    <div>
        <CareerSection/>
      </div>
    </>  
  )
}

export default Career
