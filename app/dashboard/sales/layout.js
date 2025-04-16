import React from 'react'
import Nav, {NavItem} from "@/components/Nav";
import Content from "@/components/Content";

const Layout = ({children}) => {
  return (
    <Content title={"Ventes"}>
      <div className="relative h-full w-full flex flex-col gap-5">
        <Nav>
          <NavItem text={"Aujourd'hui"} />
        </Nav>
        <>
          {children}
        </>
      </div>
    </Content>
  )
}
export default Layout
