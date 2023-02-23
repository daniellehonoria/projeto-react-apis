import logo from "../../assets/pokelogo.png"
import pokedex from "../../assets/pokedex.png"
import { LogoHeaderPokemon, Main, PokedexButton } from "./HeaderStyled.js"


const Header = () => {

    return (
        <Main>
                <LogoHeaderPokemon src={logo} alt='logo header' />
                <PokedexButton src={pokedex} alt='pokedex botão' >Pokédex</PokedexButton>

        </Main>
    )
}

export default Header