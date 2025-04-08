"use client"
import React from 'react'
import Sidebar, {SidebarItem} from "@/components/Sidebar";
import {ScrollText, Inbox, ClipboardList, TicketCheck} from "lucide-react";
import Board from "@/components/Board";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Purchase", href: "/dashboard/purchase", icon: <ScrollText size={20}/> },
  { name: "Sales", href: "/dashboard/sales", icon: <ClipboardList size={20}/> },
  { name: "Tickets", href: "/dashboard/tickets", icon: <TicketCheck size={20}/> },
  { name: "Inventory", href: "/dashboard/inventory", icon: <Inbox size={20}/> },
]

const Layout = ({children}) => {
  const pathname = usePathname();

  return (
    <div className="relative w-screen h-screen">
      <Sidebar>
        {navLinks.map(({ name, href, icon }) => {
          const isActive = pathname === href || (pathname.startsWith(href) && href !== "/");
          return(
            <Link href={href} key={name}>
              <SidebarItem icon={icon} text={name} active={isActive} />
            </Link>
          )
        })}
      </Sidebar>
      <Board>
        {children}
      </Board>
    </div>
  )
}
export default Layout
