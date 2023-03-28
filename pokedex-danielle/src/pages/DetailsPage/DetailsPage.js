import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { DetailsStyled } from "./DetailStyled"

const DetailsPage = () => {

  const params = useParams()
  const [pokeDetails, setPokedetails] = useState({})

    const GetPokemons = async() =>{
      try {
        const response = await axios.get(`${BASE_URL}/${params.id}`);
        setPokedetails(response.data);
      } catch (error) {
        console.log("Erro ao buscar detalhes de pokemon");
        console.log(error.response);
      }
    } 
    useEffect(()=>{
      GetPokemons()
    },[])
  return (
    !pokeDetails? <h1>Id inválida</h1> :
    ( 
<>
    <DetailsStyled>
    <h1>Detalhes</h1>
      <h2>{pokeDetails.id}</h2>
      <h2>{pokeDetails.ability}</h2>


    </DetailsStyled>
</>
    )

  )
}

export default DetailsPage