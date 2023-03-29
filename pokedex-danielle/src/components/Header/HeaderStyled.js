import styled from "styled-components"

export const HeaderStyled = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
height: 20vh;
width: 100%;
background-color:white;
`
export const LogoHeaderPokemon = styled.img `
height: 100px;
align-items: center;
margin: auto;
`
export const PokedexButton = styled.button `
background-color: #33A4F5;
color: #FFFFFF;
font-size:2vh;
font-weight:bold;
width:280px;
height: 74px;
border-radius: 8px;
border: none;
margin: 41px;
padding: 4px, 10px, 4px, 10px;
:hover {
    cursor: pointer;
    opacity: 0.80;
}`

export const PokemonsButton = styled.div`
margin: 41px;
border: none;
background-color: none;
text-align: left;
text-decoration:underline;
font-family:Arial, Helvetica, sans-serif;
font-size:2vh;
:hover {
    cursor: pointer
}
`

