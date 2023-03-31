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
   ImagePokeball,
   LineStats,
   DivStat,
   TextStats,
   NumberStats,
   DivTable,
   TableStats,
   TextTotalStats,
   NumberTotalStats,
   DatasDiv,
   PokemonID,
   PokemonName,
   DivType,
   PokemonType,
   DivMoves,
   TitleMoves,
   DivMoveTypes,
   TextMoveType,
   ImageCard
  } from "./DetailStyled"
import { getPokemonColors } from "../../utils/ColorDetailsPage"
import {getType} from "../../utils/ReturnPokemonType"
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
    const tableColor = (statNumber) => {
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
          color={getPokemonColors(
            pokemonDetails.name && pokemonDetails.types[0].type.name
          )}
        >
    <ImagePokeball src={pokeball} />
    <ContainerImage>
            <ImageContainer src={pokemonDetails.sprites?.front_default} />
            <ImageContainer src={pokemonDetails.sprites?.back_default} />
          </ContainerImage>
          <BoxBaseStats>
            <TitleBaseStats>Base Stats</TitleBaseStats>

            <ContainerStats>
              <LineStats></LineStats>
              {pokemonDetails.stats?.map((stat) => {
                return (
                  <>
                    <DivStat key={stat.stat.name}>
                      <TextStats>
                        {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
                      </TextStats>
                      <NumberStats>{stat.base_stat}</NumberStats>
                      <DivTable>
                        <TableStats
                          color={tableColor(stat.base_stat)}
                          size={stat.base_stat}
                        ></TableStats>
                      </DivTable>
                    </DivStat>

                    <LineStats></LineStats>
                  </>
                );
              })}
              <DivStat>
                <TextTotalStats>Total</TextTotalStats>
                <NumberTotalStats>
                  {pokemonDetails.stats && totalStats(pokemonDetails.stats)}
                </NumberTotalStats>
                <DivTable>
                  {/* use this invisible bar to continue with the right formatting */}
                  <TableStats color={"none"} size={100}></TableStats>
                </DivTable>
              </DivStat>
              <LineStats></LineStats>
            </ContainerStats>
      </BoxBaseStats>
      <DatasDiv>
      <PokemonID>#0{pokemonDetails.id}</PokemonID>
            <PokemonName>
              {pokemonDetails.name?.charAt(0).toUpperCase() +
                pokemonDetails.name?.slice(1)}
            </PokemonName>
      <DivType>
      {pokemonDetails.types?.map((type) => {
                return (
                  <PokemonType
                    key={type.type.name}
                    src={getType(type.type.name)}
                  />
                );
              })}

      </DivType>
      <DivMoves>
<TitleMoves>Moves:</TitleMoves>
<DivMoveTypes>
<TextMoveType>
{pokemonDetails.moves &&
                    pokemonDetails.moves[0].move.name.charAt(0).toUpperCase() +
                      pokemonDetails.moves[0].move.name?.slice(1)}
</TextMoveType>
<TextMoveType>
                  {pokemonDetails.moves &&
                    pokemonDetails.moves[1].move.name.charAt(0).toUpperCase() +
                      pokemonDetails.moves[1].move.name?.slice(1)}
                </TextMoveType>
                <TextMoveType>
                  {pokemonDetails.moves &&
                    pokemonDetails.moves[2].move.name.charAt(0).toUpperCase() +
                      pokemonDetails.moves[2].move.name?.slice(1)}
                </TextMoveType>
                <TextMoveType>
                  {pokemonDetails.moves &&
                    pokemonDetails.moves[3].move.name.charAt(0).toUpperCase() +
                      pokemonDetails.moves[3].move.name?.slice(1)}
                </TextMoveType>
</DivMoveTypes>
      </DivMoves>

      </DatasDiv>
      <ImageCard
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}
          />
      </Card>
    </DetailsStyled>
</>
    )

  )
}

export default DetailsPage