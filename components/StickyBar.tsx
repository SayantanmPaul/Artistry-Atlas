import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import myself from '../public/assets/myself/img_0672.png'
import banner from '../public/assets/myself/mobilebanner.png'

const robotoBold = Roboto({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

const robotoRegular = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

//socials links
const featuredSocials = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/impaul_p78814',
    logo: 'FaSquareXTwitter'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/imsayantanpaul/',
    logo: 'FaLinkedin',
    color: 'text-[#0966c2]'
  },
  {
    name: 'Github',
    link: 'https://github.com/SayantanmPaul',
    logo: 'FaGithub'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sayantanpaul.11',
    logo: 'FaInstagram',
    color: 'text-[#FC00FF]'
  },
]

//socials logos
const SocialsLogo:{[key: string]: React.ElementType} = {
  MdEmail: MdEmail,
  FaSquareXTwitter: FaSquareXTwitter,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaInstagram: FaInstagram
}


const StickyBar = async() => {
  return (
    <>
      <div className=' block lg:hidden absolute inset-2 top-[70px] -z-10'>
          <Image
          src={banner}
          alt='bannerImage'
          width={500}
          height={122}
          className='rounded-xl p-[2px] border dark:border-[#413A6F] h-[122px] w-full object-cover border-[#FFFFFF] border-opacity-50 dark:border-opacity-40 mx-auto'
        />
      </div>
      <div className=' flex flex-col lg:max-w-[184px] lg:gap-4 pt-[72px] md:pt-[56px] lg:pt-0 pl-2 lg:pl-0'>
        <div className=' flex flex-row justify-between items-end'>
        {/* admin image */}
          <React.Fragment>
            <div className=' flex flex-row justify-between'>
              <Image
                src={myself}
                alt='Sayantan Paul'
                width={175}
                height={175}
                priority
                className=' rounded-full select-none overflow-hidden lg:w-[175px] md:w-[124px] md:h-[124px] w-[104px] lg:h-[175px] h-[104px] lg:p-[4px] p-[2px] border-[1.5px] border-[#FC00FF]'
              />
            </div>
          </React.Fragment>

        <Link aria-label='linktree' href={'/linktree'}>
          <button aria-label='socials' className=' block lg:hidden text-[10px] text-[#06030B] dark:text-white right-3 mb-6 px-[12px] py-[6px] border border-[#9A55F2] rounded-2xl top-[196px] focus:bg-purple-950 duration-300 ease-in-out mr-1'>get in touch</button>
        </Link>
      </div>

      <div className=''>
          <h2 className={`${robotoBold.className} font-semibold text-[18px] leading-5 dark:text-[#F2F3F3] text-[#494E52] duration-300 pt-2 lg:pt-0 md:pt-2`}>Sayantan Paul</h2>
      </div>
        <a
          aria-label='email id'
          className={`${robotoRegular.className} block lg:hidden text-[#494E52] dark:text-[#C4C4C4] text-[13px] leading-5 underline pt-[2px] lg:pt-0 `}
          href='mailto:iam.paulsayantan06@gmail.com'
        >iam.paulsayantan06@gmail.com
        </a>
        <div className=' flex flex-row items-center gap-1 pt-[1px] lg:pt-0 '>
          {/* <SiWorkplace size={14} className=' block lg:hidden text-[#494E52] dark:text-[#C4C4C4]' /> */}
          <div>
              <p className={`${robotoRegular.className} lg:text-[13px] md:text-[13px] text-[12.5px] text-[#494E52] dark:text-[#C4C4C4] leading-5 text-wrap duration-300 font-bold`} >Software Developer | Machine Learning | An Part-Time Artist :)</p>
          </div>
        </div>
        <div className='lg:flex lg:flex-col gap-[8px] hidden'>
          {/* location and email */}
          <div className=' flex flex-row items-center gap-[4px]'>
            <HiLocationMarker size={14} />
            <p className=' text-[13px] tracking-tight leading-5 text-[#494E52] dark:text-[#C4C4C4] text-wrap duration-300'> Kolkata, West Bengal, India</p>
          </div>
          <Link href='mailto:iam.paulsayantan06@gmail.com'>
            <div className=' flex flex-row items-center gap-[6px]'>
              <MdEmail size={14} />
              <p className=' text-[13px] leading-5 text-[#494E52] dark:text-[#C4C4C4] text-wrap duration-300 ease-in-out hover:underline hover:text-black dark:hover:text-white'>Email</p>
            </div>
          </Link>
          {/* main socials */}
          {featuredSocials && SocialsLogo && featuredSocials.map((data, i) => {
            const IconComp= SocialsLogo[data.logo]
            return IconComp ? (
              <Link aria-label={data.name} href={data.link} key={i} passHref legacyBehavior>
                <a target="_blank" rel="noref">
                <div
                  key={i}
                  className=' flex flex-row items-center gap-[6px]'
                >
                  <div className={data.color? data.color: ''}>
                    <IconComp size={14}/>
                  </div>
                  <p className='text-[13px] leading-5 text-[#494E52] dark:text-[#C4C4C4] text-wrap duration-300 ease-in-out hover:underline hover:text-black dark:hover:text-white'>{ data.name}</p>
                  </div>
                  </a>
              </Link>
            ):  null
          })}
        </div>
      </div>
    </>
  )
}

export default StickyBar