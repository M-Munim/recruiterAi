import { Button } from '@/components/ui/button'
import { Copy, Send, Mail, MessageCircle } from 'lucide-react'
import moment from 'moment'
import React, { useState } from 'react'
import { toast } from 'sonner'

const InterviewCard = ({ interview }) => {
    const [showOptions, setShowOptions] = useState(false);
    const copyLink = () => {
        const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview?.interview_id
        navigator.clipboard.writeText(url);
        toast.success('Copied to clipboard');
    }

    // const onSend = () => {
    //     const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview?.interview_id;
    //     const message = `Hello! Here is your interview link: ${url} \n \nPlease be on time.`;

    //     const encodedMessage = encodeURIComponent(message);
    //     window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    // };

    const onSendWhatsApp = () => {
        const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview?.interview_id;
        const message = `Hi! Please check your interview details here: ${url}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    const onSendEmail = () => {
        const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview?.interview_id;
        const subject = 'Interview Details';
        const body = `Hi,\n\nPlease check your interview details here: ${url}`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };


    return (
        <div className='p-5 bg-gray-100 rounded-lg border mt-3'>
            <div className='flex items-center justify-between'>
                <div className='h-[40px] w-[40px] bg-blue-500 rounded-full'> </div>

                <h2 className='text-sm'>{moment(interview?.created_at).format('DD-MM-YYYY')}</h2>

            </div>
            <h2 className='mt-3 font-bold text-lg'>
                {interview?.jobPosition}
            </h2>
            <h2 className='text-sm mt-2'>
                {interview?.duration}
            </h2>

            <div className='flex gap-3 justify-between mt-3'>
                <Button variant="outline" onClick={copyLink}> <Copy /> Copy Link</Button>
                {/* <Button onClick={onSend}> <Send /> Send</Button> */}
                <div className="relative">
                    <Button onClick={() => setShowOptions(!showOptions)}>
                        <Send className="mr-2" /> Send
                    </Button>

                    {showOptions && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded z-10">
                            <button
                                onClick={onSendWhatsApp}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                            >
                                <MessageCircle size={16} /> WhatsApp
                            </button>
                            <button
                                onClick={onSendEmail}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                            >
                                <Mail size={16} /> Email
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default InterviewCard


// 4:36