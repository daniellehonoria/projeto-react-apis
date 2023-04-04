import logo from "../../assets/pokelogo.png"
import pokedex from "../../assets/pokedex.png"
import { HeaderStyled, LogoHeaderPokemon,  PokedexButton, PokemonsButton } from "./HeaderStyled.js"
import { GoToHome, GoToPokedex } from "../../Routes/coordinator"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate()



    return (
        <HeaderStyled>
            
                <PokemonsButton onClick={()=>GoToHome(navigate)}> Todos os pokemons</PokemonsButton>
                <LogoHeaderPokemon src={logo} alt='logo header' />
                
                <PokedexButton onClick={()=>GoToPokedex(navigate)} src={pokedex} alt='pokedex botão'>
                    Pokédex
                </PokedexButton>
        </HeaderStyled>
    )
}

export default Header
