import styles from 'styled-components';


export const ContainerCard = styles.div`
  width: 25rem;
  height: 8rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;


  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 4px;
  opacity: 1;

`

export const Imagem = styles.img`
  width: 5rem;
  height: 5rem;

  border-radius: 4px 0px 0px 4px;
  opacity: 1;
`

export const TituloRestaurante = styles.h1`
  text-align: left;
  font: 16px Montserrat;
  letter-spacing: 0px;
  color: #404040;
  opacity: 1;
`