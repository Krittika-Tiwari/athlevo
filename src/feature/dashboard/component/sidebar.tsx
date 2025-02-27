import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "My Goals",
    url: "#",
    icon: Inbox,
  },
  {
    title: "My Workout Plan",
    url: "#",
    icon: Calendar,
  },
  {
    title: "All Workout",
    url: "#",
    icon: Search,
  },
  {
    title: "Achievements",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="text-2xl font-bold w-full flex  items-center mt-4">
              <Link href="/">
                <span className="hover:text-gray-400 pt-11 text-gray-300 transition-colors cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
                  Athlevo
                </span>
              </Link>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
