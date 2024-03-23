import React from 'react'
import { Project } from '@/types/project-type'
import { PortableText } from "@portabletext/react";
import SectionHead from '@/components/SectionHead'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { Inter, Poppins, Roboto } from 'next/font/google'
import { Button } from '@/components/ui/button';
import { ImArrowUpRight2 } from 'react-icons/im';
import { FaGithub } from "react-icons/fa";

import Link from 'next/link';

const poppins_semibold = Poppins({ subsets: ['latin'], weight: '600' })
const roboto_medium = Roboto({ subsets: ['latin'], weight: '500' })
const inter_medium = Inter({ subsets: ['latin'], weight: '600' })

const ProjectDescSection = ({ data }: { data: Project }) => {
  if (!data) {
    return null
  }
  return (
    <div className=' flex flex-col lg:gap-[16px] gap-[12px]'>
      <SectionHead title={`Project: ${data?.title}`} />
      <ProjectCarousel data={data?.carousleImages} key={data?._id} id={data?.slug} />
      
      <div className=' flex lg:flex-row md:flex-row flex-col-reverse lg:justify-between md:justify-between lg:gap-[24px] md:gap-[18px] gap-[12px]'>
      <div className='flex flex-col gap-[6px]'>
        <h2 className={`${poppins_semibold.className} text-[18px] leading-[28px]`}>
          {data?.DescType == 'casestudy' ? 'Case Study' : 'Description'}
        </h2>
        <span className='prose dark:prose-invert text-wrap text-[16.5px] max-w-[592px] leading-[27px]'>
          <PortableText value={data?.casestudy} />
        </span>
      </div>
      <div>
      </div>
        <div className=' lg:w-[216px] md:w-[176px] w-full inline-flex flex-col gap-[12px]'>
        <span className=' inline-flex flex-row items-center gap-[4px] justify-end'>
          <p className=' text-[11px] font-semibold leading-[12px]'>Status:</p>
          <p className={`border text-[10px] px-[12px] py-[4px] rounded-full ${inter_medium.className} ${data.projectstatus=='completed'? 'border-[#00C6FB] text-[#00C6FB]': data.projectstatus=='ongoing'? ' border-[#F5DD61] text-[#F5DD61]': 'border-[#FF407D] text-[#FF407D]'} `}>{data?.projectstatus}</p>
        </span>
          {data?.projectdemoLink ? 
          <Link href={data.projectdemoLink} passHref legacyBehavior>
            <a target='_blank' rel='noref'>
            <Button size='sm' className={` inline-flex flex-row gap-2 items-center bg-gradient-to-br from-[#00C6FB] to-[#005BEA] text-white rounded-[3px] max-h-[28px] w-full hover:from-[#03b1e1] hover:to-[#1456c1]  duration-300 ease-in-out`}>
            <p className=' font-semibold text-[13px] leading-[27px]'>Project Demo</p>
            <ImArrowUpRight2 size={16} className=' w-[14px] h-[14px]'/>
              </Button>
            </a>
          </Link> :
          null}
        
          {data?.githubLink ? 
            <Link href={data.githubLink} passHref legacyBehavior>
              <a target='_blank' rel='noref'>
              <Button size='sm' variant='outline' className={`inline-flex flex-row gap-2 items-center max-h-[28px] w-full hover:from-[#03b1e1] hover:to-[#1456c1] duration-300 ease-in-out rounded-full text-[#191825] dark:text-[#F2F3F3] border-[#005BEA]`}>
              <p className=' font-semibold text-[13px] leading-[27px]'>Github Repo</p>
              <FaGithub size={16} className=' w-[15px] h-[15px]'/>
              </Button>
                </a>
            </Link>
            : null
          }
          <h4 className={`${poppins_semibold.className} font-bold lg:text-[13px] text-[16px] leading-[28px] lg:text-end md:text-end text-start w-full text-[#494E52] dark:text-[#C4C4C4]`}>Tools and Tech</h4>
          <span className='flex flex-row flex-wrap gap-[8px] lg:justify-end md:justify-end justify-start'>
            {data.tools?.map((tool, i) => (
              <span key={i} className='px-[8px] py-[4px] border border-[#413A6F]/40 dark:border-[#413A6F]/60 rounded-[4px] hover:border-[#005BEA] dark:hover:border-[#005BEA] duration-300 ease-in-out inline-block w-auto cursor-pointer group'>
                <p className={`${roboto_medium.className} lg:text-[13px] md:text-[13px] text-[14px] dark:group-hover:text-[#00C6FB] group-hover:text-[#005BEA] font-medium leading-[22px] `}>{tool}</p>
              </span>
          ))}
          </span>  
      </div>
      </div>
    </div>
  )
}

export default ProjectDescSection