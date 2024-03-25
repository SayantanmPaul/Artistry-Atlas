'use client'
import { usePathname } from 'next/navigation'
import React,{useEffect, useState} from 'react'
import LoadingBar from 'react-top-loading-bar'

const TopLoadingBar = () => {
    const [progress, setProgress] = useState(0)
    const pathName = usePathname()
    useEffect(() => {
      setProgress(100)
    }, [pathName])
    
  return (
    <div>
      <LoadingBar
        color='#FFC729'
        height={2}
        transitionTime={200}
        loaderSpeed={800}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  )
}

export default TopLoadingBar
