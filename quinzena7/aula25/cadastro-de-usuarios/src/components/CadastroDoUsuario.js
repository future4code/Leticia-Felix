import styled from 'styled-components';
import axios from 'axios'
import React from 'react'

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

export default class CadastroDoUsuario extends React.Component {
  state = {
    nomeUsuario: "",
    emailUsuario: "",

  };

  onChangeName = (event) => {
    this.setState({ nomeUsuario: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ emailUsuario: event.target.value })
  }

  criarUsuario = () => {
      const body = {
        name: this.state.nomeUsuario,
        email: this.state.emailUsuario
      };

      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
          headers: {
              Authorization: "leticia-felix-tang"
          }
      } )
      .then((response) =>{
          this.setState({ nomeUsuario: "" });
          this.setState({ emailUsuario: "" });
          alert(`O usuário ${this.state.nomeUsuario} foi criado com sucesso!`)
      })
      .catch((erro) => {
          console.log(erro.message)
          alert("Não foi possível criar o usuário")
      });

  };  


  render() {
      
    return (
      <Pagina>
        <BoxPrincipal>

          <BoxInformacoes>
            <label>Nome:</label>
            <input value={this.state.nomeUsuario} onChange={this.onChangeName}></input>
            <label>Email:</label>
            <input value={this.state.emailUsuario} onChange={this.onChangeEmail}></input>
            <BotaoEnviar onClick={this.criarUsuario}>ENVIAR</BotaoEnviar>
          </BoxInformacoes>



         
        </BoxPrincipal>
      </Pagina>
    )};
}

;
