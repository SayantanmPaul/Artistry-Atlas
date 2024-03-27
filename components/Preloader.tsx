'use client'
import React, { useEffect } from 'react'
import '/app/globals.css'
import { preLoaderAnimate } from '@/app/utils/animate'

const Preloader = () => {
    useEffect(() => {
        preLoaderAnimate()
    }, [])
    return (
        <>
            <div className='preloader h-[100vh] w-auto dark:bg-[#0F0B17] bg-white fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden '>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="texts-container flex items-center justify-between h-15 lg:w-60 w-[228px] text-lg font-bold overflow-hidden dark:text-white text-neutral-950 ">
                <span>Think,</span>
                <span>Learn &</span>
                <span>Contribute.</span>
            </div>
            </div>
        </>
    )
}

export default Preloader
