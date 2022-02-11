import styled from 'styled-components';


export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Lato", Arial, sans-serif;
`

export const ContainerCards = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items:center;
  row-gap: 2px;
  color: black;
`
export const Logo = styled.img`
  width: 18vw;
  height: auto;
  padding: 0.5rem;
  margin-top: 1rem;
`

export const BotaoVoltar = styled.button`
  width: 10vw;
  height: auto;
  padding: 0.5rem;
  margin-top: 4rem;
  font-family: "Lato", Arial, sans-serif;
`