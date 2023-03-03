import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { DetailsStyled } from "./DetailStyled"

const DetailsPage = () => {

  const {id} = useParams()
  const [pokeDetails, setPokedetails] = useState()

    const GetPokemons = async(id) =>{
      const {data}  = await axios.get(
        `${BASE_URL}/pokemon/${id}`
      )
      return data
    } 
    useEffect(()=>{
      GetPokemons(id)
      .then(pokeDetails=>{
        setPokedetails(pokeDetails[0])
      })
      .catch("Nada a exibir")
    },[])
  return (
    !pokeDetails? <h1>Id inválida</h1> :
    ( 
    <DetailsStyled>

    <h1>Detalhes</h1>
    {id}
      <h2>{pokeDetails.name}</h2>
    </DetailsStyled>

    )


    
  )
}

export default DetailsPage