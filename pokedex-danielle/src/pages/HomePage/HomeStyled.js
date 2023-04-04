import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #5e5e5e;

`
export const TitlePage = styled.p`
  padding: 10px 0 50px 60px;
  width: 500px;
  height: 72px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 72px;
  color: #ffffff;
`;
export const ListPokemons = styled.div`
display: grid;
background-color: #5e5e5e;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`