import React from 'react'
import { Project } from '@/types/project-type'
import SectionHead from '@/components/SectionHead'

const ProjectDescSection = ({data}:{data:Project}) => {
  return (
    <div>
        <SectionHead title={data.title} />
    </div>
  )
}

export default ProjectDescSection