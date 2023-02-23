import React from 'react'
import {useParams} from "react-router-dom"

const DetailsPage = () => {
    const params = useParams()
  return (
    <>
    <h1>DetailsPage</h1>
    {params.id}
    
    </>
    
  )
}

export default DetailsPage