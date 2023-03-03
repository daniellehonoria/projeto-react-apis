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


/*const Header = () => {
    const navigate = useNavigate()
    const [activeScreen, setActiveScreen] = useState('HomePage')
    const renderScreen = () =>{
        switch(activeScreen){
            case 'HomePage': 
            return
            <HeaderStyled>
            <LogoHeaderPokemon src={logo} alt='logo header' />
            <PokedexButton onClick={()=>GoToPokedex(navigate)} src={pokedex} alt='pokedex botão'>
                Pokédex
            </PokedexButton>
            </HeaderStyled>
        case 'PokedexPage':
            return
            <HeaderStyled>
            <PokemonsButton onClick={()=>GoToHome(navigate)}> Todos os pokemons</PokemonsButton>
            <LogoHeaderPokemon src={logo} alt='logo header' />
            </HeaderStyled>
        }
    }
    const pageHome = ()=>{setActiveScreen('HomePage')}
    const pagePokedex = () =>{setActiveScreen('PokedexPage')}
    return (
 <renderScreen
 pageHome={pageHome}
 pagePokedex={pagePokedex}/>
    )
}

export default Header*/