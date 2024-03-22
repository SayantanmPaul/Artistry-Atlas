import React from 'react'
import { projectDetails } from '@/sanity/sanity-queries'
import ProjectDescSection from '@/app/sections/projectdesc-section';

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {

  const slug = params.project
  const projectData = await projectDetails(slug)
  console.log(projectData);
  
  return (
    <div className='lg:max-w-[786px] w-full flex flex-col gap-[8px]'>
      <ProjectDescSection data={projectData}/>
    </div>
  )
}

export default Project


