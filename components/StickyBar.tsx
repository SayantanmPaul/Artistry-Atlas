import React from 'react'
import { aboutMySlef } from '@/sanity/sanity-queries'
import { About } from '@/types/about-type';
import { client } from '@/sanity/lib/client';
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import ImageUrlBuilder from '@sanity/image-url';

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

//sanity image url builder
const builder = ImageUrlBuilder(client)

function urlFor(source:string) {
  return builder.image(source)
}

const StickyBar = async() => {
  const post: About[] = await aboutMySlef()
  return (
    <>
      <div className=' block lg:hidden md:hidden absolute inset-2 top-[70px]'>
      {post?.length > 0 && post?.map((post,i) => (
          <Image
          key={i}
          src={urlFor(post.bannerimage).url()}
          alt='bannerImage'
          width={500}
          height={500}
          loading='lazy'
          className='rounded-xl p-[2px] border dark:border-[#413A6F] h-[122px] w-full object-cover border-[#FFFFFF] border-opacity-50 dark:border-opacity-40'
        />
        ))}
      </div>
      <div className=' flex flex-col lg:max-w-[184px] md:max-w-[184px] lg:gap-4 md:gap-2 pt-[72px] lg:pt-0 md:pt-0  z-10 pl-2 lg:pl-0'>
      {/* admin image */}
        {post?.length > 0 && post?.map((post, i) => (
          <>
        <div className=' flex flex-row justify-between items-end'>
          <Image
          key={i}
          src={urlFor(post.adminimage).url()}
          alt='author'
          width={500}
          height={500}
          loading='lazy'
          className=' rounded-full select-none overflow-hidden lg:w-[175px] md:w-[124px] md:h-[124px] w-[98px] lg:h-[175px] h-[98px] lg:p-[4px] p-[2px] border-[1.5px] border-[#FC00FF]'
          />
          <Link href={'/Links'}>
            <button className='block lg:hidden md:hidden text-[10px] text-[#06030B] dark:text-white right-3 px-[12px] py-[6px]  border border-[#9A55F2] rounded-2xl absolute top-[196px] focus:bg-purple-950 duration-300 ease-in-out'>get in touch</button>
          </Link>
        </div>  
      </>
      ))}
      <div>
          <h2 className={`${robotoBold.className} font-semibold text-[18px] leading-5 dark:text-[#F2F3F3] text-[#494E52] duration-300 pt-2 lg:pt-0 md:pt-2`}>Sayantan Paul</h2>
          
      </div>
        <a
          className={`${robotoRegular.className} block lg:hidden md:hidden text-[#494E52] dark:text-[#C4C4C4] text-[12px] leading-5 underline`}
          href='mailto:iam.paulsayantan06@gmail.com'
            >iam.paulsayantan06@gmail.com</a>
        <div className=' flex flex-row items-center gap-1'>
          <MdWorkHistory size={12} className=' block lg:hidden md:hidden text-[#494E52] dark:text-[#C4C4C4]' />
          <div>
            {post?.length > 0 && post?.map((post,i) => (
              <p className={`${robotoRegular.className} lg:text-[13px] md:text-[13px] text-[11.2px] text-[#494E52] dark:text-[#C4C4C4] leading-5 text-wrap duration-300 `} key={i}>{post.metadescription }</p>
            ))}
          </div>
        </div>
        <div className='lg:flex lg:flex-col md:flex md:flex-col gap-[8px] hidden'>
          {/* location and email */}
          <div className=' flex flex-row items-center gap-[4px]'>
            <HiLocationMarker size={14} />
            <p className=' text-[13px] leading-5 text-[#494E52] dark:text-[#C4C4C4] text-wrap duration-300'> Kolkata, West Bengal, India</p>
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
              <Link href={data.link} key={i} passHref legacyBehavior>
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