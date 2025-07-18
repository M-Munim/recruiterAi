"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { supabase } from '../../../services/supabaseClient'

const page = () => {
    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' })

        if (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center border rounded-2xl p-8'>
                <Image src="/logo.png" width={400} height={100}
                    alt="logo"
                    className='w-[180px]' />

                <div className='flex flex-col items-center'>
                    <Image src="/login.jpg" width={600} height={400} alt="login"
                        className='w-[400px] h-[250px]'
                    />

                    <h2 className='text-2xl font-bold text-center mt-5'>Welcome to interviewer.ai</h2>
                    <p className='text-gray-500 text-center'>Sign in to get started</p>

                    <Button className='mt-2 cursor-pointer' onClick={signInWithGoogle}>Sign in with Google</Button>
                </div>
            </div>
        </div>
    )
}

export default page
