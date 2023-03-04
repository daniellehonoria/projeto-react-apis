import React, { useState } from 'react'
import { GoToHome } from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom'

const PokedexPage = () => {
  const navigate = useNavigate()
  const [pokedex, setPokedex]=useState([])

  const addToPokedex = (pokemonToAdd)=>{
    const newPokedex = [...pokedex]
  }
  return (
    <div>Pokedex
    </div>
  )
}

export default PokedexPage