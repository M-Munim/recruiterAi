"use client"

import { useUser } from '@/app/provider';
import Image from 'next/image';
import React from 'react'

const WelcomeContainer = () => {
    const { user } = useUser();
    return (
        <div className='bg-gray-100 rounded-xl p-3 flex items-center justify-between'>
            <div>
                <h2 className='text-lg font-bold'>Welcome {user?.name}</h2>
                <h2 className='text-gray-500'>Ai-Generated Interviews, easy hiring</h2>
            </div>

            {user && <Image src={user?.picture} width={50} height={50} alt="user" className='rounded-full' />}
        </div>
    )
}

export default WelcomeContainer
