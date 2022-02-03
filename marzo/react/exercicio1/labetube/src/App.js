import React from "react";
import CardDeVideo from "./components/CardDeVideo";
import ItemMenu from "./components/ItemMenu";
import "./styles.css";


export default function App(props) {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <ItemMenu nome={"Início"}/>
              <ItemMenu nome={"Em alta"}/>
              <ItemMenu nome={"Inscrições"}/>
              <hr />
              <ItemMenu nome={"Originais"}/>
              <ItemMenu nome={"Histórico"}/>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardDeVideo onClick={reproduzVideo} imagem={"https://picsum.photos/400/400?a=1"} titulo={titulo}/>
            <CardDeVideo onClick={reproduzVideo} imagem={"https://picsum.photos/400/400?a=2"} titulo={titulo}/>
            <CardDeVideo onClick={reproduzVideo} imagem={"https://picsum.photos/400/400?a=3"} titulo={titulo}/>
            <CardDeVideo onClick={reproduzVideo} imagem={"https://picsum.photos/400/400?a=4"} titulo={titulo}/>
            <CardDeVideo onClick={reproduzVideo} imagem={"https://picsum.photos/400/400?a=5"} titulo={titulo}/>
            <CardDeVideo onClick={reproduzVideo} imagem={"https://picsum.photos/400/400?a=6"} titulo={titulo}/>
            <CardDeVideo onClick={reproduzVideo} imagem={"https://picsum.photos/400/400?a=7"} titulo={titulo}/>
            <CardDeVideo onClick={reproduzVideo} imagem={"https://picsum.photos/400/400?a=8"} titulo={titulo}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
