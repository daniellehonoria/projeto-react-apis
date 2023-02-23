import React from 'react'
import { GoToHome } from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom'

const PokedexPage = () => {
  const navigate = useNavigate()
  return (
    <div>Pokedex
      <button onClick={()=>GoToHome(navigate)}>Home</button>
    </div>
  )
}

export default PokedexPage