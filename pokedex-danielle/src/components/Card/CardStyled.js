import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 20px;
  color: #ffffff;
`;

export const PokemonId = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
export const ButtonDelete = styled.button`
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ff6262;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #ffffff;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CaptureButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const Pokemon = styled.img`
width: 193px;
height: 193px;
position:center;
margin-top: -50px;

right: 0;
z-index: 2;
`

export const DetailsButton = styled.div`
    font-family:Arial, Helvetica, sans-serif;
    text-align:left;
    text-decoration:underline;
    margin: auto;
    :hover{    
    cursor: pointer;
    opacity: 0.80;
}
`
