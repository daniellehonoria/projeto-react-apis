import  {CardContainer} from"./CardStyled"

const Card = (props) => {
  const{ pokemon} = props
  console.log("aqui", pokemon.sprites)
  return (
    <CardContainer>
      <h2>{pokemon.id}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <h2>{pokemon.name}</h2>
      </CardContainer>
  )
}
export default Card