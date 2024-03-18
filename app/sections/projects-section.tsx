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
      <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 flex-wrap gap-[24px] pt-6'>
        <Loading/>
        <Loading/>
        <Loading/>
        <Loading/>
      </div>
    </>
    )
}
  return (
    <div className='lg:max-w-[786px] flex flex-col gap-[8px]'>
      <SectionHead title='Featured Projects' metadesc='' />
      <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 flex-wrap gap-[24px] pt-6'>
        {data.map((data) => {
          if (data.isFeatured == true) {
            return <ProjectTab data={data} key={data._id} />
          }
          
        })}
      </div>
      <div className=' flex justify-end pt-3'>
      <span className='inline-block'>
        <Button size='default' className=' inline-flex flex-row gap-2 items-center group'>
          <p className=' font-semibold text-[14px] leading-[27px]'>View All Projects</p>
          <FaChevronDown size={16} className=' w-[12px] h-[12px] -rotate-90 group-hover:rotate-0 duration-300 ease-in-out'/>
        </Button>
      </span>
      </div>
    </div>
  )
} 

export default ProjectsSection
