import React from 'react'
import { aboutMySlef } from '@/sanity/sanity-queries'
import { About } from '@/types/about-type';
import { client } from '@/sanity/lib/client';
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import ImageUrlBuilder from '@sanity/image-url';

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
      <div className=' flex flex-col max-w-[184px] gap-4 '>
      {/* admin image */}
      {post?.length > 0 && post?.map((post,i) => (
          <Image
          key={i}
          src={urlFor(post.adminimage).url()}
          alt='author'
          width={500}
          height={500}
          loading='lazy'
          className=' rounded-full select-none overflow-hidden lg:w-[175px] w-[98px] lg:h-[175px] h-[98px] lg:p-[4px] p-[3px] border border-[#FC00FF]'
        />
        ))}
      <div>
        <h2 className=' font-semibold text-[18px] leading-5 dark:text-[#F2F3F3] text-[#494E52] duration-300'>Sayantan Paul</h2>
      </div>
      <div>
        {post?.length > 0 && post?.map((post,i) => (
          <p className=' text-[13px] text-[#494E52] dark:text-[#C4C4C4] leading-5 text-wrap duration-300 ' key={i}>{post.metadescription }</p>
        ))}
      </div>
        <div className='flex flex-col gap-[8px]'>
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
                <a target="_blank" rel="noreferrer">
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