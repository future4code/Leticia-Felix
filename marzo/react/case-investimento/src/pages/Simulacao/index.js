import React from 'react'
import { SimulacaoContainer } from './styles';




export const Simulacao = () => {
  return (
    <SimulacaoContainer>
      <div>
        <p>Olá [nome], juntando R$[mensalidade] todo mês, você terá R$[resultado da request] em [tempo].</p>
        <button>Simular novamente</button>
      </div>
    </SimulacaoContainer>
  )
}