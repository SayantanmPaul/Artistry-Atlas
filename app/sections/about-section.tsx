import React from 'react'
import { PortableText } from "@portabletext/react";
import { About } from '@/types/about-type';
import { aboutMySlef } from '@/sanity/sanity-queries';
import { Roboto } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { PiReadCvLogoBold } from "react-icons/pi";
import SectionHead from '@/components/SectionHead';
import Link from 'next/link';

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

const AboutSection = async() => {
    const AboutDocs: About = await aboutMySlef()
  return (
    <>
        <div className='flex flex-col '>
            <div className=''>
                <SectionHead title='About me'/>
            </div>
            {/* <div className=' block lg:hidden md:hidden h-[1.5px] w-full dark:bg-[#C4C4C4]/30 bg-[#494E52]/20 rounded-full'></div> */}
            <span className={`${roboto.className} dark:text-[#C3C3C3] text-[#494E52]`}>
                <span className='prose dark:prose-invert lg:text-[17.5px] text-[16px] break-words text-wrap list-none tracking-wide'>
                    <span className='hidden lg:block md:block'>
                        <PortableText value={AboutDocs.bio_desktopview}/>
                    </span>
                    <span className='block lg:hidden md:hidden'>
                        <PortableText value={AboutDocs.bio_mobileview}/>
                    </span>
                </span>
            </span>
            <span className='lg:inline-flex md:inline-flex items-start lg:mb-2 mb-4 '>
            <Link href="/sayantanpaul-resume.pdf" passHref legacyBehavior>
                <a target="_blank" rel="noref">
                <Button
                    size='default'
                    variant='default'
                    className='px-6 font-semibold dark:font-bold rounded-sm lg:w-auto md:w-auto w-full hover:shadow-lg duration-100 ease-in-out'>
                    Download CV
                    <PiReadCvLogoBold size={20} className='ml-2 h-[16px] w-[16px]'/>
                </Button>
                </a>
            </Link>
            </span>
            <div className='py-4'></div>      
        </div>
    </>
)}

export default AboutSection