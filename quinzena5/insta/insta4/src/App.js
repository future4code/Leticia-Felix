import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`
const Botao = styled.button`
  background-color: yellow;
  width: 80px;
  height: 30px;
`
class App extends React.Component {
  state = {
    posts: [
      { 
       nomeUsuario: 'paulinha',
       fotoUsuario: 'https://picsum.photos/50/50',
       fotoPost: 'https://picsum.photos/200/150'
      },
      {
       nomeUsuario: 'leticia',
       fotoUsuario:'https://picsum.photos/50/60',
       fotoPost: 'https://picsum.photos/200/160'
      },      
      {
        nomeUsuario: 'joão',
        fotoUsuario: 'https://picsum.photos/50/70',
        fotoPost: 'https://picsum.photos/200/170'
      }

    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  };
  
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novosPosts = [...this.state.posts, novoPost];
  
    this.setState({ posts: novosPosts });
    };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {

    const listaDePosts = this.state.posts.map((posts) => {
      return (
       <Post
          nomeUsuario={posts.nomeUsuario}
          fotoUsuario={posts.fotoUsuario}
          fotoPost={posts.fotoPost}
        />
      )
    });

  return (
      <div>
        <div className={'app-container'}>
          {listaDePosts}
        </div>
        <AreaInput>
          <h3>Adicionar Post</h3>
          <input 
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder="Nome do Usuário"/>
          <input 
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder="Foto do Usuário"/>
          <input 
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder="Foto do Post"/>
          <Botao onClick={this.adicionaPost}>Adicionar</Botao>
        </AreaInput>
      </div>
    );
  }
}

export default App;
