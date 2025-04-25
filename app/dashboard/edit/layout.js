import React from 'react'
import Content from "@/components/Content";
import Nav, {NavItem} from "@/components/Nav";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <Content title={"Edit"}>
      <div className={"h-full flex flex-col gap-5"}>
        <Nav>
          <Link href={"/dashboard/edit"}>
            <NavItem text={"Produit"}/>
          </Link>
          <Link href={"/dashboard/edit/distributor"}>
            <NavItem text={"Distributeur"}/>
          </Link>
          <Link href={"/dashboard/edit/distributor/adhesion"}>
            <NavItem text={"Adhésion"}/>
          </Link>
        </Nav>
        <div className={"relative ml-5 h-full"}>
          {children}
        </div>
      </div>
    </Content>
  )
}
export default Layout
