import { useContext } from "react";
import Card from "../../components/Card/Card";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../context/GlobalContext";
import { ModalDelete } from "../../components/Modal/Modal";
import { DivCards, DivMain, TitlePokedex } from "./pokedexPageStyled";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex, showMessage, setShowMessage } = context;

  return (
    <>
        <DivMain>
          <TitlePokedex>Meus Pokemons</TitlePokedex>
          <DivCards>
            {pokedex && pokedex.map((pokemon)=>( 
            <Card
            key={pokemon.id}
            pokemonUrl={`${BASE_URL}/pokemon/${pokemon.id}`}
            />
            ))}
          </DivCards>  
        </DivMain>
    </>
  );
};

export default PokedexPage;
