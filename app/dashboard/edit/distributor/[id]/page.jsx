import React from 'react'

const EditDist = async ({params}) => {
  const { id } = await params;
  return (
    <div>EditDist : {id}</div>
  )
}
export default EditDist
