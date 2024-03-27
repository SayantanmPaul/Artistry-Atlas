import PageWrapper from '@/app/page-wrapper'
import ProjectsSection from '@/app/sections/projects-section'
import StickyBar from '@/components/StickyBar'
import React from 'react'

// export const dynamic = 'force-dynamic'
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
