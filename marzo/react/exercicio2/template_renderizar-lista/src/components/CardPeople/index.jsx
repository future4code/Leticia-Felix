import React from 'react';
import "./styles.css";

export default function index(props) {
  return (
    <div className="card-bg">
      <h1>Name: {props.name}</h1>
      <div>
        <section className="section-one">
          <div>
            <h4>Birth year: {props.birth}</h4>
            <p></p>
          </div>
          <div>
            <h4>Gender: {props.gender}</h4>
            <p></p>
          </div>
        </section>

        <section className="section-two">
          <div>
            <h4>Height: {props.height}</h4>
            <p></p>
          </div>
          <div>
            <h4>Mass: {props.mass}</h4>
            <p></p>
          </div>
        </section>

        <section className="section-three">
          <div>
            <h4>Hair color: {props.haircolor}</h4>
            <p></p>
          </div>
          <div>
            <h4>Eye color: {props.eyecolor}</h4>
            <p></p>
          </div>
        </section>
      </div>
    </div>
  );
}
