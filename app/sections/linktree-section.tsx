import React from 'react'
import Image from 'next/image'
import myself from '@/public/assets/myself/img_0672.png'
import { Ibarra_Real_Nova, Poppins, Raleway } from 'next/font/google'
import { linkList } from '@/sanity/sanity-queries'
import { Links } from '@/types/link-type'
import { Project } from '@/types/project-type'
import { projectList } from '@/sanity/sanity-queries'
import { ImArrowUpRight2 } from "react-icons/im";
import Link from 'next/link'
import { FaSquareXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { mainSocials } from '../utils/mainSocials'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Ibarra= Ibarra_Real_Nova({weight:'600', style: 'normal', subsets: ['latin']})
const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })
const raleway= Raleway({ weight: '700', style: 'normal', subsets: ['latin'] })


const SocialsLogo:{[key: string]: React.ElementType} = {
  FaSquareXTwitter: FaSquareXTwitter,
  FaLinkedinIn: FaLinkedinIn,
  FiGithub: FiGithub,
  FaInstagram: FaInstagram,
  MdAlternateEmail: MdAlternateEmail
}

const LinktreeSection = async() => {
  const otherLinklist: Links[] = await linkList()
  const featureProjectList: Project[] = await projectList()
  
  return (
    <div className='flex flex-col lg:gap-[36px] gap-[28px] items-center'>
      <div className='flex flex-col lg:gap-[16px] gap-[12px] items-center'>
        <div className='border border-[#005BEA] rounded-full p-1'>
          <Image
            src={myself}
            alt='sayantan paul'
            width={250}
            height={250}
            priority
            className='lg:w-[112px] lg:h-[112px] w-[102px] h-[102px] rounded-full overflow-hidden' />
        </div>
        <h2 className={`${Ibarra.className} text-[24px] leading-[22px] font-bold`}>Sayantan paul</h2>
        <p className={`${poppins.className} text-[12px] leading-[22px] font-normal max-w-[264px] text-center text-[#494E52] dark:text-[#C4C4C4]`}>Software Developer | Machine Learning | An Part-Time Artist :)</p>
      <div className='flex flex-row gap-[24px]'>
        {SocialsLogo && mainSocials.map((link,i)=>{
          const IconComp = SocialsLogo[link.logo]
          return IconComp ? (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger asChild>
                <Link href={link.link}>
                  <div key={i} className='p-[10px] rounded-[8px] border border-transparent hover:border-[#005BEA] ease-in-out duration-300 hover:text-[#005BEA] dark:hover:text-[#00C6FB]'>
                  <IconComp size={20}/>
                  </div>
                </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
          ): null
        })}
      </div>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <p className={`${raleway.className} tracking-[6px] dark:text-white/60 uppercase text-[14px] text-[#191825]/60 duration-300 ease-in-out text-center w-full`}>Featured Projects</p>
        {featureProjectList.map((project, i) => {
          if (project.isFeatured == true) return (
            <span key={i} className='lg:w-[356px] md:w-[356px] w-[324px]'>
              <Link href={`/projects/${project.slug}`}>
                <div className='dark:bg-[#413A6F]/20 bg-[#D0CADF] hover:bg-gradient-to-r hover:from-[#1798FF] hover:to-[#D65DFE] p-[1px] rounded-[6px] group'>
                  <div className='dark:bg-[#0F0B17] bg-[#FFFFFF] rounded-[5px]'>
                    <div className='flex flex-row justify-between items-center px-[22px] py-[8px]'>
                      <div className='flex flex-row gap-[12px] items-center'>
                        <Image style={{width: 'auto', height: 'auto'}} src={project.logo} alt={project._id} width={16} height={16} className=' w-auto h-auto object-fill' />
                        <p className=' text-[14px] leading-[20px] font-semibold'>{project.title}</p>
                      </div>
                      <ImArrowUpRight2 size={16} className='text-[#D0CADF] dark:text-[#F2F3F3]/40 group-hover:text-[#1798FF] duration-300 ease-in-out' />
                    </div>
                  </div>
                </div>
              </Link>
            </span>
          )
        })}
      </div>
      <div className='flex flex-col gap-[20px]'>
      <p className={`${raleway.className} tracking-[6px] dark:text-white/60 uppercase text-[14px] text-[#191825]/60 duration-300 ease-in-out text-center w-full`}>other socials</p>
        {otherLinklist.map((link, i) => {
          if (link.type == 'socialLink') return (
            <span key={i} className='lg:w-[356px] md:w-[356px] w-[324px]'>
              <Link href={link.url}>
                <div className='dark:bg-[#413A6F]/20 bg-[#D0CADF] hover:bg-gradient-to-r hover:from-[#1798FF] hover:to-[#D65DFE] p-[1px] rounded-[6px] group'>
                  <div className='dark:bg-[#0F0B17] bg-[#FFFFFF] rounded-[5px]'>
                    <div className='flex flex-row justify-between items-center px-[22px] py-[8px]'>
                      <div className='flex flex-row gap-[12px] items-center'>
                        <Image src={link.logo} alt={link._id} width={16} height={16} className='w-[16px] object-fill' />
                        <p className=' text-[14px] leading-[20px] font-semibold'>{link.title}</p>
                      </div>
                      <ImArrowUpRight2 size={16} className='text-[#D0CADF] dark:text-[#F2F3F3]/40 group-hover:text-[#1798FF] duration-300 ease-in-out' />
                    </div>
                  </div>
                </div>
              </Link>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default LinktreeSection
