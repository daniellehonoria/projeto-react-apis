import styled from "styled-components";

export const MainPokedex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: #5e5e5e;
`;

export const CardsPokedex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  justify-content: center;
`;

export const Title = styled.p`
  padding: 30px 0 100px 30px;
  width: 420px;
  height: 72px;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
`;
