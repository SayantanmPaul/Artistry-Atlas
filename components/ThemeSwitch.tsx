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
            className='hover:animate-spin-once duration-300'
            onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
    }}>
            {theme === 'dark' ?
                <MdOutlineDarkMode size={24} />
                : <MdOutlineLightMode size={24} />}
    </button>
)}

export default ThemeSwitch