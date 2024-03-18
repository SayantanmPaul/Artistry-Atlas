'use client'
import React, { useEffect, useState } from 'react'
import { Project } from '@/types/project-type'
import Image from 'next/image'
import { Poppins, Roboto } from 'next/font/google'
import { ImArrowUpRight2 } from "react-icons/im";

const poppinsSemibold = Poppins({ subsets: ['latin'], weight: '500' })
const robotoBold = Roboto({ subsets: ['latin'], weight: '500' })

const ProjectTab = ({
    data, isFeatured
}: {
        data: Project,
        isFeatured?: boolean
    }) => {

    return (
    <span className='p-[2.1px] bg-[#7FEBEE] hover:bg-gradient-to-r hover:from-[#1798FF] hover:to-[#D65DFE] rounded-[7px] overflow-hidden cursor-pointer duration-300 ease-in-out'>
    <span className=' w-full relative rounded-[7px] group'>
        <div className='rounded-[6px] overflow-hidden w-full h-full'>
            <Image src={data.mockup} alt={data.title} width={376} height={260} className=' lg:w-[376px] lg:h-[260px] md:w-full md:h-[238px] w-full  h-[256px] object-cover  z-0 group-hover:scale-110 ease-in-out duration-300' />
        </div>
        <div className='absolute top-0 z-10 w-full h-32 bg-gradient-to-b from-slate-900/50 overflow-hidden rounded-[5px]'>
        </div>
        <div className='absolute top-[12px] left-[24px] z-10'>
            <p className={`${poppinsSemibold.className} text-white text-[12px] leading-[22px] `}>{ data.catagory}</p>
        </div>
        <div className='absolute h-[86px] bottom-0 bg-[#0F0B17]/30 w-full backdrop-blur-[20px] z-10 overflow-hidden rounded-b-[6px] lg:group-hover:block lg:hidden duration-500 ease-out-expo'>
            <div className='flex flex-row  px-[30px] justify-between h-full items-center'>
                <div className='inline-flex flex-col gap-[4px] justify-center '>
                    <p className={`${robotoBold.className} text-white text-[18px] leading-[22px] font-bold `}>{ data.title}</p>
                    <p className={`${robotoBold.className} text-white text-[12px] leading-[16px] font-bold max-w-[262px] text-wrap`}>{data.metadescription}</p>
                </div>
                <ImArrowUpRight2 size={18} className='text-white'/>
            </div>
        </div>
    </span>
    </span>
  )
}

export default ProjectTab
