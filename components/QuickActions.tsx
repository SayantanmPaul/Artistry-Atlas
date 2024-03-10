'use client'
import React, { useEffect, useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { FiCommand } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import NoSPam from '../public/assets/nospam.png'
import Space from '../public/assets/spacedev.png'
import ThemeSwitch from './ThemeSwitch';
import { Inter } from 'next/font/google'
import { useTheme } from 'next-themes'

const interbold = Inter({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
})
const interregular = Inter({
    weight: '500',
    subsets: ['latin'],
    display: 'swap'
})

const media = [
    {
        name: 'Github',
        link: 'https://github.com/SayantanmPaul/',
        logo: FiGithub
    },
    {
        name: 'X (Twitter)',
        link: 'https://twitter.com/impaul_p78814',
        logo: BsTwitterX
    },
    {
        name: 'Medium',
        link: 'https://medium.com/@sayantanpaul.workspace',
        logo: FaMedium
    },
]

const QuickActions = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
    <>
    <div>
    <AlertDialog>
        <AlertDialogTrigger asChild className=' flex justify-center'>
            <button className='border border-[#C4C4C4] dark:border-[#14141D] border-opacity-30 rounded-full hover:border-opacity-90 '>
                <FiCommand size={16} className=' lg:w-4 lg:h-4 w-[18px] h-[18px] lg:m-[11px] m-[8px] ' />
            </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
        <div className=' absolute top-[11px] w-full px-[17px] duration-500 ease-in-out'>
            <div className=' flex flex-col gap-[10px]'>
                <div className=' flex flex-row justify-between relative'>
                    <div className=' flex flex-row gap-2 items-center'>
                        <FiCommand size={14} className=''/>
                        <p className=' text-[#AFAFAF] dark:text-[#8B8B8B] font-medium text-[14px] text-center align-middle leading-[22px]'>Quick Actions</p>
                    </div>
                    <div className=' flex flex-row gap-[8px] items-center'>
                        <p className={` ${interregular.className} text-[#AFAFAF] dark:text-[#8B8B8B] font-medium text-[14px] text-center align-middle leading-[22px]`}>Exit</p>
                        <AlertDialogCancel >
                        <button className={`${interbold.className} border dark:border-[#2F2F43] border-[#E5E5E5] text-[10px] text-[#404040] dark:text-[#FFFFFF] font-bold leading-[22px] px-[6px] rounded-[4px]`}>ESC</button>
                        </AlertDialogCancel>
                    </div>
                </div>
                <div className=' dark:bg-border bg-[#E5E5E5] w-full h-[1px]'></div>
            </div>    
        </div>
        <div className='pt-[42px]'>
            <div className=' text-[#404040] dark:text-[#FFFFFF] text-[12px] font-semibold leading-[16px] w-full bg-[#D0CADF]/40 dark:bg-[#413A6F]/20 pl-[8px] py-[4px] rounded-[4px]'>Suggested</div>
        </div>
        <div className=' flex flex-row gap-[40px] justify-evenly'>
            <div className=' flex flex-col items-center gap-[5px] group '>
                <Link href='/'>
                    <div className=' bg-[#D0CADF]/40 dark:bg-slate-200 dark:group-hover:bg-white group-hover:bg-[#D0CADF]/70 w-[40px] h-[40px] rounded-md flex justify-center items-center duration-300 ease-in-out '>
                        <Image src={NoSPam} alt='nospam_project' width={30} height={30} className='w-6 group-hover:scale-105 duration-300 ease-in-out' /> 
                    </div>
                </Link>
                <p className=' text-[#8B8B8B] dark:text-[#AFAFAF] dark:group-hover:text-white group-hover:text-[#404040] leading-[22px] font-medium text-[12px] duration-300 ease-in-out'>NoSpam.</p>
            </div>
            <div className='flex flex-col items-center gap-[5px] group'>
                <Link href='/'>
                    <div className=' bg-[#D0CADF]/40 dark:bg-slate-200 dark:group-hover:bg-white group-hover:bg-[#D0CADF]/70 w-[40px] h-[40px] rounded-md flex justify-center items-center duration-300 ease-in-out'>
                        <Image src={Space} alt='spacedev_project' width={30} height={30} className='w-[28px] group-hover:scale-110 duration-300 ease-in-out' /> 
                    </div>
                </Link>
                <p className=' text-[#8B8B8B] dark:text-[#AFAFAF] dark:group-hover:text-white leading-[22px] font-medium text-[12px] duration-300 ease-in-out group-hover:text-[#404040]'>SpaceDev</p>
            </div>
            <div className=' h-full w-[2px] bg-[#D0CADF]/40 dark:bg-[#413A6F]/20'></div>
            <div className='flex flex-col items-center gap-[5px] group'>
                <div className=' bg-[#D0CADF]/40 dark:bg-[#413A6F]/20 dark:group-hover:bg-[#413A6F]/40 group-hover:bg-[#D0CADF]/60 w-[40px] h-[40px] rounded-md flex justify-center items-center duration-300 ease-in-out'>
                    <MdOutlineEmail size={25} className=' dark:text-white text-[#06030B]' />
                </div>
                <p className=' text-[#8B8B8B] dark:text-[#AFAFAF] dark:group-hover:text-white leading-[22px] font-medium text-[12px] duration-300 ease-in-out group-hover:text-[#404040]'>email</p>
            </div>
            <div className='flex flex-col items-center gap-[5px] group'>
                <div className='bg-[#D0CADF]/40 dark:bg-[#413A6F]/20 dark:group-hover:bg-[#413A6F]/40 group-hover:bg-[#D0CADF]/60 w-[40px] h-[40px] rounded-md flex justify-center items-center duration-300 ease-in-out'>
                    <ThemeSwitch/>
                </div>
                <p className=' text-[#8B8B8B] dark:text-[#AFAFAF] dark:group-hover:text-white leading-[22px] font-medium text-[12px] duration-300 ease-in-out group-hover:text-[#404040]'>{theme}</p>
            </div>
            <div className='flex flex-col items-center gap-[5px] group'>
                <div className='bg-[#D0CADF]/40 dark:bg-[#413A6F]/20 dark:group-hover:bg-[#413A6F]/40 group-hover:bg-[#D0CADF]/60 w-[40px] h-[40px] rounded-md flex justify-center items-center duration-300 ease-in-out'>
                    <BiMessageDetail size={24} className=' dark:text-white text-[#06030B]' />
                </div>
                <p className='text-[#8B8B8B] dark:text-[#AFAFAF] dark:group-hover:text-white leading-[22px] font-medium text-[12px] duration-300 ease-in-out group-hover:text-[#404040]'>message</p>
            </div>
        </div>
        <div className=' text-[#404040] dark:text-[#FFFFFF] text-[12px] font-semibold leading-[16px] w-full bg-[#D0CADF]/40 dark:bg-[#413A6F]/20 pl-[8px] py-[4px] rounded-[4px]'>More</div>
            <div className=' flex flex-col gap-[8px]'>
                {media.map((social, i) => {
                return (
                <Link key={social.name} href={`${social.link}`} passHref legacyBehavior>
                    <a target='_blank'>
                        <div className=' w-full hover:bg-[#D0CADF]/40 dark:hover:bg-[#413A6F]/20 px-[8px] py-[4px] rounded-[4px] duration-300 ease-in-out flex flex-row gap-[8px] items-center justify-start'>
                            <div className='flex flex-row justify-between w-full items-center'>          
                                <div className='flex flex-row gap-[8px] items-center'>
                                    <div className='w-[24px] h-[24px] rounded-[4px] dark:bg-[#F2F3F3] bg-[#06030B] flex justify-center items-center'>
                                        <social.logo size={20} className='dark:text-black text-white w-[16px] h-[16px]' />
                                    </div>
                                    <p className='text-[#404040] dark:text-[#FFFFFF] text-[14px] font-medium leading-[16px]'>{social.name}</p>
                                </div>
                                <p className='text-[#8B8B8B] dark:text-[#AFAFAF] text-[12px] font-medium leading-[16px]'>Link</p>
                            </div>
                        </div>
                    </a>
                </Link>
                )})}
                </div>
            </AlertDialogContent>
        </AlertDialog>
    </div>
    </>
)}

export default QuickActions
