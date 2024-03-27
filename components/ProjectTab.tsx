'use client'
import React from 'react'
import { Project } from '@/types/project-type'
import Image from 'next/image'
import { Inter, Poppins, Roboto } from 'next/font/google'
import { ImArrowUpRight2 } from "react-icons/im";
import Link from 'next/link'

const poppinsSemibold = Poppins({ subsets: ['latin'], weight: '500' })
const poppinsbold = Poppins({ subsets: ['latin'], weight: '600' })
const InterBold = Inter({ subsets: ['latin'], weight: '400' })

const ProjectTab = ({
    data
}: {
        data: Project,
        isFeatured?: boolean
    }) => {

    return (
        <span className='p-[2.1px] bg-[#7FEBEE] hover:bg-gradient-to-r hover:from-[#1798FF] hover:to-[#D65DFE] lg:rounded-[7px] rounded-[10px] overflow-hidden cursor-pointer duration-300 ease-in-out object-cover'>
    <Link href={`/projects/${data.slug}`}>
    <span className=' w-full relative lg:rounded-[7px] rounded-[10px] overflow-hidden group'>
        <div className='lg:rounded-[7px] rounded-[10px] overflow-hidden object-cover'>
            <Image
                src={data.mockup}
                alt={data.title}
                width={1080}
                height={720}
                priority
                className='lg:w-[376px] lg:h-[260px] md:w-full md:h-[238px] w-full h-[256px] object-cover z-0 group-hover:scale-110 ease-in-out duration-300 ' />
        </div>
        <div className='absolute top-0 z-10 w-full h-32 bg-gradient-to-b from-slate-900/40 overflow-hidden lg:rounded-[7px] rounded-[10px]'>
        </div>
        <div className='absolute top-[12px] left-[24px] z-10'>
            <p className={`${poppinsSemibold.className} text-white text-[12px] leading-[22px] `}>{ data.catagory}</p>
        </div>
        <div className='absolute h-[86px] bottom-0 bg-[#0F0B17]/40 w-full backdrop-blur-[20px] z-10 overflow-hidden lg:rounded-b-[6px] rounded-b-[10px] lg:group-hover:block lg:hidden duration-500 ease-out-expo'>
            <div className='flex flex-row  lg:px-[30px] px-[24px] justify-between h-full items-center'>
                <div className='inline-flex flex-col gap-[4px] justify-center '>
                    <p className={`${poppinsbold.className} text-white text-[18px] leading-[22px] font-bold `}>{ data.title}</p>
                    <p className={`${InterBold.className} text-[#F2F3F3] text-[12px] leading-[16px] font-medium lg:max-w-[262px] max-w-[284px] text-wrap`}>{data.metadescription}</p>
                </div>
                <ImArrowUpRight2 size={20} className='text-white m-2'/>
            </div>
        </div>
    </span>
</Link>
</span>
  )
}

export default ProjectTab
