'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md";
const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    return (
        <button
            aria-label='theme-switch'
            className='hover:animate-spin-once duration-300'
            onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
    }}>
            {theme === 'dark' ?
                <MdOutlineDarkMode size={24} className=' w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] dark:text-[#000000] text-[#F2F3F3] lg:dark:text-[#F2F3F3] lg:text-[#000000]' />
                : <MdOutlineLightMode size={24} className='w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] dark:text-[#000000] text-[#F2F3F3] lg:dark:text-[#F2F3F3] lg:text-[#000000]' />}
    </button>
)}

export default ThemeSwitch