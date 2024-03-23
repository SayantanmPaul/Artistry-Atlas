import React from 'react'
import { projectDetails } from '@/sanity/sanity-queries'
import ProjectDescSection from '@/app/sections/projectdesc-section';
import { Metadata, ResolvingMetadata } from 'next';
// export const dynamic = 'force-dynamic'

type Props = {
  params: { project: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const projectData = await projectDetails(slug);
  return {
    title: `Project: ${projectData?.title}`,
    description: `${projectData?.metadescription}`,
  };
}

const Project = async ({ params }: Props) => {

  const slug = params.project
  const projectData = await projectDetails(slug)
  
  return (
    <div className='lg:max-w-[786px] w-full flex flex-col gap-[8px]'>
      <ProjectDescSection data={projectData} />
      
    </div>
  )
}

export default Project


