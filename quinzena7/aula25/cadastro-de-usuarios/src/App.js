import styled from 'styled-components';
import axios from 'axios'
import React from 'react'
import CadastroDoUsuario from './components/CadastroDoUsuario';
import ListaDeUsuarios from './components/ListaDeUsuarios';

const Pagina = styled.div`
  width: 100%;
  height: 100%;
  background-color: #edf2fb;
  background-repeat: repeat-y;
  position: fixed;
`
const BoxPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const BoxInformacoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 20vh;
  border-style: solid;
  border-radius: 10px;
  margin-top: 30%;
  background-color: #abc4ff;
  gap: 8px;
`
const BotaoLista = styled.div`
  margin-top: 50px;
`
const BotaoEnviar = styled.button`
  background-color: white;
`

export default class App extends React.Component {
  state = {
    cadastro: true,
  };

  
  mudaTela = () => {
    this.setState({ cadastro: !this.state.cadastro})
  }



  render() {
    return (
      <Pagina>

      <button onClick={this.mudaTela}>{this.state.cadastro ? "Ir para Lista" : "Ir para Cadastro"}</button>
      {this.state.cadastro ? <CadastroDoUsuario /> : <ListaDeUsuarios />}
      </Pagina>
    )};
}

;
