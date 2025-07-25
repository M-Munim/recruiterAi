"use client"

import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import FormContainer from './_components/FormContainer';
import QuestionList from './_components/QuestionList';
import { toast } from 'sonner';

const CreateInterview = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState();

    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }
    // console.log(formData);

    const onGoToNext = () => {
        // if (!formData?.jobPosition || !formData?.jobDescription || !formData?.duration || !formData?.type) {
        //     toast.error('Please fill all fields to continue')
        //     return;
        // }

        setStep(prev => prev + 1)
    }

    return (
        <div className='mt-8 px-8  lg:px-10 xl:px-40'>
            <div className='flex gap-5 items-center'>
                <ArrowLeft className='cursor-pointer' onClick={() => router.back()} />
                <h2 className='font-bold text-2xl'>Create New Interview</h2>
            </div>
            <Progress value={step * 33.33} className='my-5' />
            {step === 1 ? <FormContainer onHandleInputChange={onHandleInputChange}
                GoToNext={() => onGoToNext()}
            /> :
                step === 2 ? <QuestionList formData={formData} /> : null
            }
        </div>
    )
}

export default CreateInterview