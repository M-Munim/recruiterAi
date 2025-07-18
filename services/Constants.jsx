import { Calendar, CalendarDaysIcon, LayoutDashboardIcon, List, Settings2, WalletCards } from "lucide-react";

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