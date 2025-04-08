import React from 'react'
import Blob from "@/components/Blob";

const Layout = ({children}) => {
  return (
    <div className="relative w-full h-full">
      <Blob/>
      <div className="w-full h-full z-50">
        {children}
      </div>
    </div>
  )
}
export default Layout
