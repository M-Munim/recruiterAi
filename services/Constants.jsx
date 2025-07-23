import { BriefcaseBusinessIcon, Calendar, CalendarDaysIcon, Code2Icon, LayoutDashboardIcon, List, PersonStanding, PuzzleIcon, Settings2, User2Icon, WalletCards } from "lucide-react";

export const SideBarOptions = [
    {
        name: "Dashboard",
        icon: LayoutDashboardIcon,
        path: "/dashboard"
    },
    {
        name: "Schedule Interview",
        icon: CalendarDaysIcon,
        path: "/schedule-interview"
    },
    {
        name: "All Interview",
        icon: List,
        path: "/all-interview"
    },
    {
        name: "Billing",
        icon: WalletCards,
        path: "/billing"
    },
    {
        name: "Settings",
        icon: Settings2,
        path: "/settings"
    },
]

export const InterviewType = [
    {
        title: "Technical",
        icon: Code2Icon
    },
    {
        title: "Behavioral",
        icon: User2Icon
    },
    {
        title: "Experience",
        icon: BriefcaseBusinessIcon
    },
    {
        title: "Problem Solving",
        icon: PuzzleIcon
    },
    {
        title: "Leadership",
        icon: PersonStanding
    },

]