import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <span className=' rounded-[7px] overflow-hidden cursor-pointer duration-300 ease-in-out'>
    <span className=' w-full relative rounded-[7px] group'>
            <div className='rounded-[6px] overflow-hidden w-full h-full'>
                <Skeleton className=" lg:w-[376px] lg:h-[260px] md:w-full md:h-[238px] w-full  h-[256px] "/>
        </div>
        <div className='absolute top-0 z-10 w-full h-32 bg-gradient-to-b dark:from-slate-900/30 from-slate-900/10 overflow-hidden rounded-[5px]'>
        </div>
            <div className='absolute top-[12px] left-[24px] z-10'>
                <Skeleton className="w-24 h-4"/> 
        </div>
        <div className='absolute h-[86px] bottom-0 dark:bg-[#0F0B17]/30 bg-[#0F0B17]/5 w-full backdrop-blur-[20px] z-10 overflow-hidden rounded-b-[6px] duration-500 ease-out-expo'>
            <div className='flex flex-row  px-[30px] justify-between h-full items-center'>
            <div className='inline-flex flex-col gap-[4px] justify-center '>
                <Skeleton className="w-48 h-[12px]"/>    
                <Skeleton className="w-56 h-3"/>    
                <Skeleton className="w-64 h-3"/>    
                </div>
            </div>
        </div>
    </span>
    </span>
    )
}