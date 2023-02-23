import logo from "../../assets/pokelogo.png"
import pokedex from "../../assets/pokedex.png"
import { LogoHeaderPokemon, Main, PokedexButton } from "./HeaderStyled.js"
import { GoToPokedex } from "../../Routes/coordinator"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate()

    return (
        <Main>
                <p>Header</p>
                <LogoHeaderPokemon src={logo} alt='logo header' />
                <PokedexButton onClick={()=>GoToPokedex(navigate)} src={pokedex} alt='pokedex botão'>
                    Pokédex
                </PokedexButton>

        </Main>
    )
}

export default Header