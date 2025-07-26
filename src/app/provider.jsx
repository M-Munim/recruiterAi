"use client"

import React, { useContext, useEffect, useState } from 'react'
import { supabase } from '../../services/supabaseClient'
import { User } from 'lucide-react'
import { UserDetailContext } from '../../context/UserDetailContext'

const Provider = ({ children }) => {
    const [user, setUser] = useState()

    useEffect(() => {
        CreateNewUser()
    }, [])

    const CreateNewUser = () => {
        supabase.auth.getUser().then(async ({ data: { user } }) => {
            // check if user is already exists
            let { data: Users, error } = await supabase
                .from("Users")
                .select("*")
                .eq("email", user?.email);

            // console.log(Users);
            // if not then create user
            if (Users?.length === 0) {
                const { data, error } = await supabase.from("Users")
                    .insert([
                        {
                            name: user?.user_metadata?.name,
                            email: user?.email,
                            picture: user?.user_metadata?.picture
                        }
                    ])
                console.log(data);
                setUser(data)
                return;
            }
            setUser(Users[0])
        })
    }

    return (
        <UserDetailContext.Provider value={{ user, setUser }}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    )
}

export default Provider

export const useUser = () => {
    const context = useContext(UserDetailContext)
    return context;
}