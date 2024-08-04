'use client'
import SectionHead from '@/components/SectionHead'
import React, { useEffect, useState } from 'react'
import { projectList } from '@/sanity/sanity-queries'
import ProjectTab from '@/components/ProjectTab'
import { Button } from '@/components/ui/button'
import { FaChevronDown } from "react-icons/fa";
import { Project } from '@/types/project-type'
import Loading from '../(client)/projects/ProjectCompLoading'

const ProjectsSection = () => {

  const [loading, setloading] = useState(true)
  const [data, setData] = useState<Project[]>([])
  const [isView, setIsView] = useState(false)

  useEffect(() => {
    const ProjectData = async () => {
      const ProjectListData = await projectList()
      setData(ProjectListData)
      setloading(false)
    }
    ProjectData()
  }, [])

  if (loading) {
    return (<>
      <SectionHead title='Featured Projects' metadesc='' />
      <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 flex-wrap lg:gap-[24px] gap-[16px] lg:pt-4 pt-[8px]'>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </div>
    </>
    )
  }
  return (
    <div className='lg:max-w-[786px] flex flex-col gap-[8px]'>
      <SectionHead title='Featured Projects' metadesc='' />
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 flex-wrap lg:gap-[24px] gap-[16px] lg:pt-4 pt-[8px]'>
        {data.slice(0, isView ? data.length : 4).map((project) => {
          return (
            <ProjectTab data={project} key={project._id} />
          )
        })}
      </div>
      {data.length > 4 && (
        <span className='inline-flex justify-end w-full pt-3'>
          <Button onClick={() => setIsView(!isView)} size='default' className={` flex-row gap-2 items-center group w-full lg:w-auto md:w-auto`}>
            <p className='font-semibold text-[14px] leading-[27px]'>{!isView ? 'View All Projects' : "Hide All Projects"}</p>
            <FaChevronDown size={16} className={`w-[12px] h-[12px] -rotate-90 ${!isView ? 'group-hover:rotate-0' : 'group-hover:-rotate-180'} duration-300 ease-in-out`} />
          </Button>
        </span>
      )}
      <div className='py-4'></div>
    </div>
  )
}

export default ProjectsSection
