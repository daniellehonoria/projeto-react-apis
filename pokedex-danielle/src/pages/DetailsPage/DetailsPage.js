import axios from "axios"
import pokeball from "../../assets/pngwing 2.png"
import { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import {BoxBaseStats, 
  TitleBaseStats,
   ImageContainer, 
   ContainerImage, 
   DetailsStyled, 
   TitleDetails, 
   Card, ContainerStats,
   ImagePokeball} from "./DetailStyled"
import { getColors } from "../../utils/ReturnCardColor"
import { GlobalContext } from '../../context/GlobalContext'


const DetailsPage = () => {

  const params = useParams()
  
  const [pokemonDetails, setPokemonDetails] = useState({})
  const context = useContext(GlobalContext)
  const {pokeDetails, setPokeDetails} = context
    const GetPokemons = async() =>{
      try {
        const response = await axios.get(`${BASE_URL}/${params.id}`);
        setPokemonDetails(response.data);
      } catch (error) {
        console.log("Erro ao buscar detalhes de pokemon");
        console.log(error.response);
      }
    } 
    useEffect(()=>{
      GetPokemons()
    },[])
    const barColor = (statNumber) => {
      if (statNumber <= 50) {
        return "#ff7c2d";
      } else {
        return "#ffdd6a";
      }
    };
    const totalStats = (stat) => {
      return (
        stat[0].base_stat +
        stat[1].base_stat +
        stat[2].base_stat +
        stat[3].base_stat +
        stat[4].base_stat +
        stat[5].base_stat
      );
    };
  return (
    !pokemonDetails? <h1>Id inválida</h1> :
    ( 
<>
    <DetailsStyled>
    <TitleDetails>Detalhes</TitleDetails>
    <Card
          color={getColors(
            pokemonDetails.types && pokemonDetails.types[0].type.name
          )}
        >
    <ImagePokeball src={pokeball} />
    <ContainerImage>
            <ImageContainer src={pokemonDetails.sprites?.front_default} />
            <ImageContainer src={pokemonDetails.sprites?.back_default} />
          </ContainerImage>
          <BoxBaseStats>
            <TitleBaseStats>Base stats</TitleBaseStats>
            <ContainerStats>
              
            </ContainerStats>
      <h2>{pokemonDetails.id}</h2>
      <h2>{pokemonDetails.name}</h2>
      </BoxBaseStats>

      </Card>
    </DetailsStyled>
</>
    )

  )
}

export default DetailsPage