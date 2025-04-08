import React from 'react'

const Content = ({children, title}) => {
  return (
    <div className="relative h-full flex flex-col">
      <div className="mt-5 mx-20">
        <h1>{title}</h1>
      </div>
      <div className="absolute top-20 bottom-0 left-0 right-0 overflow-auto">
        {children}
      </div>
    </div>
  )
}
export default Content
