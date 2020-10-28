import React from 'react'


export default class Etapa1 extends React.Component {
    render() {
        return <div>
            <h1>Etapa 1 - Dados Gerais</h1>
            <p> Qual o seu nome?</p>
            <input></input>
            <p>Qual a sua idade?</p>
            <input></input>
            <p>Qual o seu email?</p>
            <input></input>
            <p>Qual o seu grau de escolaridade?</p>
            <select> 
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
        </div>
    }
}

