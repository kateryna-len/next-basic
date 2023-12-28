import React from 'react'

function DetailsProduct({params}: {params: {productId : string}}) {
  return (
    <div>Details Product {params. productId}</div>
  )
}

export default DetailsProduct