import ProjectsSection from '@/app/sections/projects-section'
import StickyBar from '@/components/StickyBar'
import React from 'react'

// export const dynamic = 'force-dynamic'
const Projects = () => {
  return (
    <>
    <div className="min-w-[196px]">
      <StickyBar />
    </div>
    <div>
      <ProjectsSection/>
    </div>
    </>
  )
}

export default Projects
