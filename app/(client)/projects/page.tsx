import PageWrapper from '@/app/page-wrapper'
import ProjectsSection from '@/app/sections/projects-section'
import StickyBar from '@/components/StickyBar'
import { Metadata } from 'next'
import React from 'react'

// export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects to get a deeper understanding my learning implementation and contribution in multiple real world scenario."
}
const Projects = () => {
  return (
    <>
        <div className='mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-4 lg:px-0 md:px-4 lg:pl-0'>
          <div className="min-w-[196px]">
            <StickyBar />
        </div>
        <PageWrapper>
          <div>
            <ProjectsSection/>
          </div>
        </PageWrapper>
        </div>
    </>
  )
}

export default Projects
