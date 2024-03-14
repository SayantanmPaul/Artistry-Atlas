import React from 'react'
import { Inter } from 'next/font/google'
import { PortableText } from "@portabletext/react";
import { About } from '@/types/about-type';
import { aboutMySlef } from '@/sanity/sanity-queries';
import { Roboto } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { PiReadCvLogoBold } from "react-icons/pi";
import SectionHead from '@/components/SectionHead';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

const AboutSection = async() => {
    const AboutDocs: About[] = await aboutMySlef()
  return (
    <>
        <div className='flex flex-col lg:gap-[16px] gap-[4px]'>
            <div className=' mb-1 lg:mb-0 md:mb-0'>
                <SectionHead title='About me'/>
            </div>
            <div className=' block lg:hidden md:hidden h-[1.5px] w-full dark:bg-[#C4C4C4]/30 bg-[#494E52]/20 rounded-full'></div>
            <span className={`${roboto.className}text-[14px] dark:text-[#C3C3C3] text-[#494E52] lg:leading-[27px] leading-[8px] text-pretty antialiased text-ellipsis font-medium`}>
                {AboutDocs.map((data, i) => (
                    <span key={i} className='prose dark:prose-invert lg:text-[17.5px] text-[13.5px] break-words text-wrap list-none tracking-wide'>
                        <PortableText value={data.bio}/>
                    </span>
                ))}
            </span>
            <span className='lg:inline-flex md:inline-flex items-start lg:my-2 my-4  '>
            <Link href="/sayantanpaul-resume.pdf" passHref legacyBehavior>
                <a target="_blank" rel="noref">
                <Button
                    size='default'
                    variant='default'
                    className='px-4 font-semibold dark:font-bold rounded-sm lg:w-auto md:w-auto w-full hover:shadow-lg duration-100 ease-in-out'>
                    Download CV
                    <PiReadCvLogoBold size={20} className='ml-2 h-[16px] w-[16px]'/>
                </Button>
                </a>
            </Link>
            </span>
        </div>
    </>
)}

export default AboutSection