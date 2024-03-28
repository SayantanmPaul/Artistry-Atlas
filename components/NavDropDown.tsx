  'use state'
import React, {useState, useEffect} from 'react'
import { FiCommand } from "react-icons/fi";
import NavLinks from '../constant/index'
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import ThemeSwitch from './ThemeSwitch';
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation';

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

const NavDropDown = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isClicked, setisClicked] = useState(true)

  const path = usePathname()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  //mobile nav functionality
  const toggleNav = () => {
    setisClicked(!isClicked)
  }

  //active route function
  function handleActiveState(route:string) {
    setisClicked(!isClicked)
  }

  return (
    <div className='flex'>
      <button
        onClick={toggleNav}
        aria-label='toggle-nav'
        className='border border-[#C4C4C4] dark:border-[#14141D] border-opacity-30 rounded-full hover:border-opacity-90 hover:animate-spinonce duration-300 ease-in-out'>
          <FiCommand size={16} className=' lg:w-4 lg:h-4 w-[18px] h-[18px] lg:m-[11px] m-[8px]' />
      </button>
        <div className={`absolute left-0 w-full max-w-[96%] md:max-w-[97.5%] inset-0 mx-auto ${isClicked===false ? 'top-16': '-top-[522px] md:-top-[640px]'} duration-1000 ease-out-expo  h-[46vh] md:h-[42vh] z-40 `}>
          <div className=' p-[12px] flex flex-col gap-[4px] bg-[#F6E3FE]/70 dark:bg-[#1D1B25]/70 border dark:border-[#413A6F]/40 border-[#D0CADF] rounded-[8px] custom-blur'>
          {NavLinks.map((route_name, i) => (
            <Link href={`${route_name.route}`} key={route_name.name}>
              <div onClick={() => handleActiveState(`${route_name.name}`)} className={`nav_font dark:text-[#F2F3F3] text-[#404040] leading-6 py-[3px]  text-[14px] flex flex-row justify-between ${route_name.route===path? "active duration-100 dark:text-[#F3F3F3] bg-[#413A6F]/20 dark:bg-white/10 px-[10px] rounded-[4px] dark:font-semibold font-semibold py-[4px]" : 'dark:font-medium font-semibold px-[10px] py-[4px] duration-300 ease-in-out'}`}>
                <p>
                  {route_name.name}
                </p>
                {route_name.route===path? <div className='flex flex-row items-center gap-1 text-[#404040]/60 dark:text-[#F2F3F3]/40 duration-300 ease-in-out'>
                  <p className=' text-[12px]  font-medium'>current tab</p>
                  <FaChevronRight size={10} />
                </div> : ''}
              </div>
            </Link>
          ))}
            <div className=' pt-1'>
              <p className=' text-black dark:text-[#FFFFFF]/60 font-bold bg-[#D0CADF]/80 dark:bg-white/15 w-full px-[10px] mb-2 text-[12px] rounded-[4px] leading-6'>suggested</p>
            </div>
            {media.map((_, i) => {
              return (
              <Link key={i} href={_.link}>
                <div className=' w-full hover:bg-[#D0CADF]/40 dark:hover:bg-[#413A6F]/20 px-[8px] py-[4px] rounded-[4px] duration-300 ease-in-out flex justify-start'>
                    <div className='flex flex-row justify-between w-full items-center '>          
                      <div className='flex flex-row gap-[8px] items-center justify-center'>
                        <div className='w-[20px] h-[20px] rounded-[4px] dark:bg-[#F2F3F3] bg-[#06030B] flex justify-center items-center'>
                          <_.logo size={12} className='dark:text-black text-white w-[12px] h-[12px] duration-300 ease-in-out' />
                        </div>
                        <p className='text-[#404040] dark:text-[#FFFFFF] text-[12px] font-medium leading-[16px] duration-300 ease-in-out'>{_.name}</p>
                      </div>
                    <p className='text-[#8B8B8B] dark:text-[#AFAFAF] text-[12px] font-medium leading-[16px]'>Link</p>
                  </div>
                </div>
              </Link>
            )
            })}
            <div className=' flex flex-row items-center gap-[10px] px-[8px] hover:bg-[#D0CADF]/40 dark:hover:bg-[#413A6F]/20 py-[4px] rounded-[4px] duration-300 ease-in-out'>
              <div className='bg-[#06030B] dark:bg-[#F2F3F3] p-[3px] w-[20px] rounded-[4px] flex justify-center py-[4px]'>
                <ThemeSwitch/>
              </div>
              <div className='flex flex-row justify-between w-full'>
                <div className='text-[#404040] dark:text-[#FFFFFF] text-[12px] font-medium leading-[16px] flex flex-row gap-1'>
                  <p>{theme}</p>
                </div>
                <p className='text-[#8B8B8B] dark:text-[#AFAFAF] text-[12px] font-medium leading-[16px]'>/change mode </p>
              </div>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default NavDropDown
