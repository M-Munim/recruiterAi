import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { InterviewType } from '../../../../../../services/Constants'
import { Button } from '@/components/ui/button'

const FormContainer = ({ onHandleInputChange }) => {
    const [interviewType, setInterviewType] = useState([]);

    useEffect(() => {
        if (interviewType) {
            onHandleInputChange('type', interviewType)
        }
    }, [interviewType])

    const AddInterviewType = (type) => {
        const data = interviewType.includes(type);
        if (!data) {
            setInterviewType(prev => [...prev, type])
        } else {
            const result = interviewType.filter(item => item !== type)
            setInterviewType(result)
        }
    }
    return (
        <div className='p-5 bg-gray-100'>
            <div>
                <h2 className='text-sm font-medium'>Job Position</h2>
                <Input placeholder='e.g. Software Engineer' className='mt-2'
                    onChange={(event) => onHandleInputChange('jobPosition', event.target.value)} />
            </div>

            <div className='mt-5'>
                <h2 className='text-sm'>Job Description</h2>
                <Textarea placeholder='Enter details job description' className='mt-2 h-[180px]'
                    onChange={(event) => onHandleInputChange('jobDescription', event.target.value)} />
            </div>

            <div className='mt-5'>
                <h2 className='text-sm'>Interview Duration</h2>
                <Select onValueChange={(value) => onHandleInputChange('duration', value)}>
                    <SelectTrigger className='mt-2 w-full'>
                        <SelectValue placeholder="Select Interview Duration" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="5 Min">5 minutes</SelectItem>
                        <SelectItem value="15 Min">15 minutes</SelectItem>
                        <SelectItem value="30 Min">30 minutes</SelectItem>
                        <SelectItem value="45 Min">45 minutes</SelectItem>
                        <SelectItem value="60 Min">1 hour</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className='mt-5'>
                <h2 className='text-sm'>Interview Type</h2>
                <div className='flex gap-3 flex-wrap mt-1'>
                    {InterviewType.map((type, index) => (
                        <div key={index}
                            className={`flex cursor-pointer items-center gap-2 mt-2 p-1 px-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-200 ease-in-out duration-300 
                                ${interviewType?.includes(type.title) && 'bg-gray-200 border-gray-400'}
                                `}
                            onClick={() => AddInterviewType(type.title)}
                        >
                            <type.icon className='size-4' />
                            <span>{type.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className=''>
                <Button className='mt-5 w-full'>Generate Questions</Button>
            </div>
        </div>
    )
}

export default FormContainer
