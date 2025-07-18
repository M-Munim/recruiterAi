"use client"

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"
import Image from "next/image"
import React from 'react'
import { SideBarOptions } from "../../../../services/Constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AppSidebar = () => {
    const path = usePathname()
    console.log(path)

    return (
        <Sidebar>
            <SidebarHeader className="flex items-center mt-5">
                <Image src="/Logo.png" width={200} height={100} alt="Logo" className="w-[180px]" />

                <Button className="w-full mt-5"> <Plus />Create New Interview</Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarContent>
                        <SidebarMenu>
                            {SideBarOptions.map((option, index) => (
                                <SidebarMenuItem key={index} className="p-1">
                                    <SidebarMenuButton asChild className={`p-5
                                                ${path === option.path ? "bg-gray-200" : ""}
                                                `}>
                                        <Link href={option.path}>
                                            <option.icon className={`
                                                ${path === option.path ? "text-primary" : "text-muted-foreground"}
                                                `} />
                                            <span className={`text-[16px]
                                                ${path === option.path ? "text-primary" : "text-muted-foreground"}
                                                `}>{option.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar
