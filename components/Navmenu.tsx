'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import NavLinks from '../constant/index'
import logo from '../public/assets/letter-s (1) 1.svg'
import NavDropDown from './NavDropDown'

import QuickActions from './QuickActions'
const poppins = Poppins({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
})

const Navmenu = () => {

    const [active, setActive] = useState('home')

    //active route function
    function handleActiveState(route:string) {
        setActive(route)
    } 
    return (
        <>
            <div className="mx-auto lg:max-w-[1050px] lg:max-h-[52px] justify-between items-center flex lg:px-[25px] px-[8px]  lg:py-2 py-[3px] bg-[#FFFFFF] bg-opacity-30 dark:bg-[#1D1B25] dark:bg-opacity-40 border dark:border-[#413A6F] border-[#FFFFFF] border-opacity-50 dark:border-opacity-40 rounded-[12px] duration-300 transition-all overflow-hidden">
                <Image src={logo} alt='default_logo' width={1200} height={1200} className=' lg:w-[28px] w-6 object-contain' />
                <div className=' lg:flex md:flex flex-row gap-6 font-medium lg:text-[16px] md:text-[12px] text-[12px] text-[#22242C] dark:text-[#C4C4C4] duration-300 hidden '>
                {NavLinks.map((route_name, i) => (
                        <Link href={`${route_name.route}`} key={route_name.name}>
                            <p onClick={()=>handleActiveState(`${route_name.name}`)} className={`nav_font  ${active===route_name.name? 'active duration-100 dark:text-[#F3F3F3]': ''}`}>{ route_name.name}</p>
                        </Link>
                    ))}
                    <Link href={'/linktree'}>
                        <p className={`${poppins.className} bg-clip-text text-transparent inline-block bg-gradient-to-r dark:from-[#FFC729] dark:to-[#C84E00] dark:bg-gradient-to-r from-[#FC6584] to-[#0D25B9] font-black duration-300 ease-in-out`}>links</p>
                    </Link>
                </div>
                <div className='flex flex-row lg:gap-0 gap-4 items-center'>
                    <Link href={'/linktree'}>
                        <p className={`${poppins.className} bg-clip-text text-transparent inline-block bg-gradient-to-r dark:from-[#FFC729] dark:to-[#C84E00] dark:bg-gradient-to-r from-[#FC6584] to-[#0D25B9] font-black text-sm duration-300 ease-in-out lg:hidden md:hidden`}>links</p>
                    </Link>
                    <div className=' block lg:hidden md:hidden z-20'>
                        <NavDropDown/>
                    </div>
                    <div className=' lg:block hidden md:block'>
                        <QuickActions/>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Navmenu