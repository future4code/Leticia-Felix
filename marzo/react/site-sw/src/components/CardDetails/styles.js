import styled from 'styled-components';


export const CardContainer = styled.div`
  background-color: white;
  color: black;
  font-family: "Lato", Arial, sans-serif;
  width: 35vw;
  height: 38vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  text-transform: capitalize;
  border-color: yellow;
  border-style: solid;
  border-width: medium;
`
export const Nome = styled.h1`
  color: black;
  font-family: "Lato", Arial, sans-serif;
  font-weight: 800;
  font-size: 30px;
`

export const Props = styled.h2`
  color: black;
  font-family: "Lato", Arial, sans-serif;
  font-weight: 500;
  font-size: 20px;
`

export const Subtitulo = styled.p`
  color: blue;
  font-family: "Lato", Arial, sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
`

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

`