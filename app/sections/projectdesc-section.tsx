import React from 'react'
import { Project } from '@/types/project-type'
import SectionHead from '@/components/SectionHead'
import { ProjectCarousel } from '@/components/ProjectCarousel'

const ProjectDescSection = ({data}:{data:Project}) => {
  return (
    <div className=' flex flex-col lg:gap-[16px] gap-[12px]'>
      <SectionHead title={data.title} />
      <ProjectCarousel data={data.carousleImages} key={data._id} id={data.slug} />
    </div>
  )
}

export default ProjectDescSection