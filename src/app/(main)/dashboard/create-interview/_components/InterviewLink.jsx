import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Calendar1, Clock, Copy, ListCheck, LucideShare2, Mail, Plus } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { toast } from 'sonner';

const InterviewLink = ({ interviewId, formData }) => {
    const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interviewId;

    const GetInterviewUrl = () => {
        return url
    }

    const onCopyLink = async () => {
        await navigator.clipboard.writeText(url);
        toast.success('Copied to clipboard');
    }

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <Image src={'/tick.jpg'}
                width={200}
                height={200}
                className='w-[50px] h-[50px]'
            />

            <h2 className='text-2xl font-bold mt-4'>Interview Scheduled Successfully</h2>
            <p className='mt-2'>Share this link with the candidate to start the interview </p>

            <div className='w-full p-7 mt-6 rounded-lg bg-gray-100'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold'>Interview Link</h2>
                    <h2 className='p-1 px-2 text-blue-400 underline'>
                        Valid for 30 Days
                    </h2>
                </div>

                <div className='mt-3 flex gap-3 items-center'>
                    <Input defaultValue={GetInterviewUrl()} readOnly />
                    <Button onClick={() => onCopyLink()}><Copy /> Copy Link</Button>
                </div>
                <hr className='my-7' />

                <div className='flex gap-3 items-center'>
                    <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Clock className='h-4 w-4' /> {formData?.duration}</h2>

                    <h2 className='text-sm text-gray-500 flex gap-1 items-center'><ListCheck className='h-4 w-4' /> 10 Questions</h2>

                    {/* <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Calendar1 className='h-4 w-4' /> {formData?.duration}</h2> */}
                </div>
            </div>

            <div className='mt-7 bg-gray-100 p-5 rounded-lg w-full'>
                <h2 className='font-bold'>Share Via</h2>

                <div className='flex gap-3 mt-3'>
                    <Button variant={'outline'}><Mail /> Email</Button>
                    <Button variant={'outline'}><Mail /> Slack</Button>
                    <Button variant={'outline'}><LucideShare2 /> WhatsApp</Button>
                </div>
            </div>

            <div className='flex w-full gap-5 justify-between mt-6'>
                <Link href={'/dashboard'}>
                    <Button variant={'outline'}><ArrowLeft />Back to Dashboard</Button>
                </Link>

                <Link href={'/create-interview'}>
                    <Button><Plus /> Create New Interview</Button>
                </Link>
            </div>
        </div>
    )
}

export default InterviewLink
