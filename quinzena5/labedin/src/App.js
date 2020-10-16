import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import leticia from './img/leticia.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={leticia} 
          nome="Leticia Felix" 
          descricao="Oi, me chamo Leticia. Sou jornalista, trabalhei algum tempo com publicidade e agora estou estudando na Labenu para me tornar uma desenvolvedora Front-End."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Informações de Contato</h2>
        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/893/893292.svg" 
          texto="Email: leticia@leticia.com.br"
        />
        <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/2302/2302043.svg"
          texto="Endereço: Rua X, n 0. Feira de Santana - Bahia"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/2620/2620971.svg" 
          nome="Labenu" 
          descricao="Atualmente fazendo o curso de desenvolvimento front-Front-End na Labenu" 
        />
        
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1086/1086451.svg" 
          nome="Agência de Publicidade e Propaganda X" 
          descricao="Trabalhei por alguns anos com Social Media e edição de vídeos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
