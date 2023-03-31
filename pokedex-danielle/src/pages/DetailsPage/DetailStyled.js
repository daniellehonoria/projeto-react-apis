import styled from "styled-components";

export const DetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #5e5e5e;
`
export const TitleDetails = styled.p`
  padding: 10px 0 10px 200px;
  align-self: flex-start;
  width: 400px;
  height: 72px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 32px;
  color: #ffffff;
`;
export const Card = styled.div`
  position: relative;
  display: flex;
  gap: 3vw;
  width: 1400px;
  height: 670px;
  left: 0px;
  top: 0px;
  background-color: ${(props) => props.color};
  border-radius: 37.8857px;
`;
export const ImagePokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0px;
  height: 100%;
`;
export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  justify-content: center;
  gap: 2%;
`;
export const ImageContainer = styled.img`
  width: 100%;
  height: 40%;
  border: 2px solid #ffffff;
  border-radius: 8px;
  background-color: #ffffff;
`;
export const BoxBaseStats = styled.div`
  align-self: center;
  width: 343px;
  height: 80%;
  left: 360px;
  top: 24px;
  background: #ffffff;
  border-radius: 12px;
`;

export const TitleBaseStats = styled.p`
  padding: 30px 0 30px 30px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 20px;
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
`;

export const DivStat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const TextStats = styled.div`
  text-align: end;
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  padding-right: 35px;
  color: #939393;
  flex-grow: 1;
`;

export const NumberStats = styled.p`
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  flex-grow: 0;
  padding-right: 10px;
`;

export const DivTable = styled.div`
  display: flex;
  justify-content: end;
  width: 100px;
  padding-right: 10px;
`;

export const TableStats = styled.div`
  background-color: ${(props) => props.color};
  height: 10px;
  border-radius: 8px;
  ${(props) => `
    width: ${props.size}px;
  `}
`;

export const LineStats = styled.hr`
  opacity: 0.3;
`;

export const TextTotalStats = styled.div`
  text-align: end;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #939393;
  flex-grow: 1;
`;

export const NumberTotalStats = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  flex-grow: 0;
  padding-right: 10px;
  padding-left: 29px;
`;

export const DatasDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1%;
`;

export const PokemonID = styled.p`
  width: 30px;
  height: 19px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 19px;
  color: #ffffff;
  padding-top: 5vh;
  padding-bottom: 3vh;
`;

export const PokemonName = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 50px;
  color: #ffffff;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  border: 1px dashed #ffffff;
  margin-right: 8px;
  position:relative
`;

export const DivType = styled.div`
  margin-bottom: 52px;
  margin-top: 10px;
  display: flex;
  gap: 5px;
`;

//pokemon moves
export const DivMoves = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 292px;
  height: 453px;
  top: 170px;
  background: #ffffff;
  border-radius: 8px;
`;

export const DivMoveTypes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-left: 30px;
`;

export const TextMoveType = styled.p`
  font-size: 14px;
  line-height: 17px;
  left: 814px;
  top: 599px;
  background: #ececec;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  padding: 10px;
`;


export const TitleMoves = styled.p`
  padding: 30px 0 30px 30px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
`;
export const ImageCard = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: -60px;
  right: 50px;
  z-index: 2;
`;
