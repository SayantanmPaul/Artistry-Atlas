import React, {useRef} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { BiMessageDetail } from "react-icons/bi";
import { Button } from "@/components/ui/button"
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { FiSend } from "react-icons/fi";

const MessageDialog = () => {
    const form = useRef()
    const SendEmail = () => {
        
    } 
return (
    <Dialog>
        <DialogTrigger asChild>
            <div className='bg-[#D0CADF]/40 dark:bg-[#413A6F]/20 dark:group-hover:bg-[#413A6F]/40 group-hover:bg-[#D0CADF]/60 w-[40px] h-[40px] rounded-md flex justify-center items-center duration-300 ease-in-out'>
                <BiMessageDetail size={24} className=' dark:text-white text-[#06030B]' />
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <h2 className=' text-[#8B8B8B] dark:text-[#AFAFAF] font-bold text-[14px] '>Send Message</h2>
            </DialogHeader>
            <form ref={form} onSubmit={SendEmail}>
                <div className=' flex flex-col gap-[14px]'>
                    <Input type="email" placeholder="Email" name='email_id' required />
                    <Textarea placeholder="share your idea or leave a feedback" className='' name='message' required/>
                    <Button  type='button'>
                        <FiSend size={16} className=' mr-2 h-4 w-4'/>
                        Send</Button>   
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default MessageDialog