import React from 'react';

export default function CardDeVideo(props) {
  return (
    <div className="box-pagina-principal" onClick={props.onClick}>
      <img src={props.imagem} alt="" />
      <h4>{props.titulo}</h4>
  </div>
  );
}
