import React from 'react'

function DocType({params}: {params : {
  slug: string[]
}}) {
  if(params.slug?.length === 2){
    return <h1>This route have to params 1 - {params.slug[0]}</h1>
  }
  return (
    <div>DocType hello</div>
  )
}

export default DocType