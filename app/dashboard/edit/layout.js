import React from 'react'
import Content from "@/components/Content";
import Nav, {NavItem} from "@/components/Nav";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <Content title={"Edit"}>
      <div className={"h-full flex flex-col gap-5"}>
        <Nav>
          <Link href={"http://localhost:3000/dashboard/edit"}>
            <NavItem text={"Produit"}/>
          </Link>
          <Link href={"http://localhost:3000/dashboard/edit/distributor"}>
            <NavItem text={"Distributeur"}/>
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
