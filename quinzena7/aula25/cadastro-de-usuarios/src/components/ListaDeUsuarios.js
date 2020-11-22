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
  align-items: space-between;
`
const BoxLista = styled.div`
  display: flex;
  margin: 10px;
  align-items: space-between;
  gap: 15px;
`



export default class ListaDeUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarUsuarios();
  }

  
  pegarUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
    {
        headers: {
            Authorization: "leticia-felix-tang"
        }
    } )
    .then((resposta) => {
        this.setState({ usuarios: resposta.data });
    })
    .catch((erro) => {
        console.log(erro.message);
    })
};


  deletarUsuario = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
    {
        headers: {
            Authorization: "leticia-felix-tang"
        }
    } )
      .then((resposta) => {
          this.pegarUsuarios();
          alert("Usuário deletado com sucesso!")

      })
      .catch((erro) => {
          console.log(erro.message);
          alert("Não foi possível deletar o usuário")
      })
}

  render() {     
    
    const mostrarLista = this.state.usuarios.map((usuario) => {
                return ( 
                <BoxLista key={usuario.id}>
                {usuario.name} 
                <button onClick={() => {this.deletarUsuario(usuario.id)}}>X</button> 
                </BoxLista>
                )
            });

    return (
      <Pagina>
        <BoxPrincipal>
        
            {mostrarLista}
          
        </BoxPrincipal>
      </Pagina>
    )};
};


