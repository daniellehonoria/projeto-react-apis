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
    <div>
      <DivMain>
        <TitlePokedex>Meus Pokémons</TitlePokedex>
        <ModalDelete onClose={() => setShowMessage(false)} show={showMessage}/>
        <DivCards>
          {/* getting pokedex state from the button on Card and mapping to show the pokemons */}
          {pokedex.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                pokemonUrl={`${BASE_URL}/${pokemon.name}`}
              />
            );
          })}
        </DivCards>
      </DivMain>
    </div>
  );
};

export default PokedexPage;
