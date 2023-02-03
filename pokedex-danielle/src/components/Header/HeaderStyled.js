import styled from "styled-components"

export const Main = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
height: 15vh;
max-width: 100vw;
background-color:hotpink;
`
export const LogoHeaderPokemon = styled.img `
height: 113px;
align-items: center;
margin: auto;
`
export const PokedexButton = styled.button `
background-color: #33A4F5;
color: #FFFFFF;
font-size:2vw;
font-weight:bold;
width:280px;
height: 74px;
border-radius: 8px;
border: none;
margin-top: 41px;
padding: 4px, 10px, 4px, 10px;
:hover {
    cursor: pointer;
    opacity: 0.80;
}`

