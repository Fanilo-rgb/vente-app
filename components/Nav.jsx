import React from 'react'

const Nav = ({children}) => {
  return (
    <nav className="shadow-lg flex gap-2 mx-5 px-15 rounded-md">
      {children}
    </nav>
  )
}
export default Nav

export const NavItem = ({ text }) => {
  return (
    <div className="bg-primary px-12 py-2 rounded-t-3xl font-semibold">
      {text}
    </div>
  )
}
