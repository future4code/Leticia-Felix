import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import CardName from "./components/CardName/index.jsx";
import CardPeople from "./components/CardPeople/index.jsx";

export default function App(props) {
  const [people, setPeople] = useState([]);
 
  const renderiza = () => {
    setPeople(data);
  };

  const lista = people.map((item) => {
    return(
      <div>
        <CardPeople 
          name={item.name}
          height={item.height}
          mass={item.mass}
          haircolor={item.hair_color}
          eyecolor={item.eye_color}
          birth={item.birth_year}
          gender={item.gender}
        />
      </div>
    )
  });

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <button onClick={renderiza}>Renderiza lista</button>
      <div className="List">
        <ul>
          {lista}
        </ul>
      </div>
    </div>
  );
}
