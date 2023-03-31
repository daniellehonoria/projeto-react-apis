import { useContext } from "react";
import Card from "../../components/Card/Card";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../context/GlobalContext";
import { ModalDelete } from "../../components/Modal/Modal";
import { DivCards, DivMain, TitlePokedex } from "./pokedexPageStyled";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex, message, setMessage } = context;

  return (
    <div>
      <DivMain>
        <TitlePokedex>Meus Pokémons</TitlePokedex>
        <ModalDelete onClose={() => setMessage(false)} show={message}/>
        <DivCards>
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
