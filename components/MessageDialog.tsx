import React, {useRef, FormEvent} from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { BiMessageDetail } from "react-icons/bi";
import { Button } from "@/components/ui/button"
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const MessageDialog = () => {

    // from emailjs docs
    const form = React.useRef<HTMLFormElement>(null);
    const SendEmail = (e: FormEvent) => {
    e.preventDefault();
        if (form.current) {
            if (!process.env.NEXT_PUBLIC_GMAIL_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
                throw new Error('Keys arent functi  onal');
            }
            emailjs.sendForm(process.env.NEXT_PUBLIC_GMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            })
            .then(() => {
                toast('message sent ✨');
                if (form.current) {
                    form.current.reset();
                }
                return Promise.resolve();
            })
            .catch((err) => {
                toast('some error occured !', err);
                return Promise.reject(err);
            });
        }
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
                    <Button onSubmit={SendEmail}>
                        <FiSend size={16} className=' mr-2 h-4 w-4'/>
                        Send</Button>   
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default MessageDialog