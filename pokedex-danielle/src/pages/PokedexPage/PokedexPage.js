import { useContext } from "react";
import Card from "../../components/Card/Card";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../context/GlobalContext";
import { ModalDelete } from "../../components/Modal/Modal";
import { CardsPokedex, MainPokedex, Title } from "./pokedexPageStyled";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex, message, setMessage } = context;

  return (
    <>
        <MainPokedex>
          <Title>Meus Pokemons</Title>
          <ModalDelete onClose={() => setMessage(false)} display={message}/>

          <CardsPokedex>
            {pokedex.map((pokemon)=>{
              return(
            <Card
            key={pokemon.id}
            pokemon={pokemon}

            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            />
              )
})}
          </CardsPokedex>  
        </MainPokedex>
    </>
  );
};

export default PokedexPage;
