import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { DetailsStyled } from "./DetailStyled"

const DetailsPage = () => {
  const {id} = useParams()
      const [pokemonDetails, setPokemonDetails] =useState()

    const GetPokemon = async(id) =>{
    const {data} = await axios.get(
      `${BASE_URL}/pokemon/${id}`
    )
    return data
  }

  useEffect(()=>{
    GetPokemon(id)
    .then(pokemonDetails=>{
      setPokemonDetails(pokemonDetails)
    })
    .catch("erro")
  }, [])

  return (
    !pokemonDetails? <h1>Não existe</h1> :(    
    <DetailsStyled>
    <h2>{id}</h2>
    </DetailsStyled>
    
    )

  )
}

export default DetailsPage