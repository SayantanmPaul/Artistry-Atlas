import React from 'react'
import { projectDetails } from '@/sanity/sanity-queries'
import ProjectDescSection from '@/app/sections/projectdesc-section';
import { Metadata, ResolvingMetadata } from 'next';
import StickyBar from '@/components/StickyBar';
import PageWrapper from '@/app/page-wrapper';

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
    <>
        <div className='mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-4 lg:px-0 md:px-4 lg:pl-0'>
        <div className="min-w-[196px]">
          <StickyBar />
        </div>
      <PageWrapper>
        <div className='lg:max-w-[786px] w-full flex flex-col gap-[8px]'>
          <ProjectDescSection data={projectData} />
        </div>
      </PageWrapper>
      </div>
    </>
  )
}

export default Project


