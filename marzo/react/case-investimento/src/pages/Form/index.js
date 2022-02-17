import React, { useEffect, useState } from 'react'
import { FormContainer, Formulario, InputForm, Button } from './styles';
import axios from 'axios';


export const Form = () => {
  const [form, setForm] = useState({
    nome: "",
    mensalidade: "",
    tempo: "",
  });

  // useEffect(() => {
  //   axios.post('http://api.mathjs.org/')
  // }, [])

   const handleInput = (event) => {
     const { name, value } = event.target;
     setForm({ ...form, [name]: value })
   }


   // [valor da mensalidade * (((1 + [taxa de juros]) ^ [tempo de contribuicao em meses] - 1) / [taxa de juros])
   // body request: { "expr": "20 * (((1 + 0.00517) ^ 24 - 1) / 0.00517)" }


  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <h1>Simulador</h1>
      <Formulario onSubmit={onSubmitForm}>
        <InputForm
          name="nome"
          value={form.nome}
          onChange={handleInput}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
          />
        <InputForm
        name="mensalidade"
        value={form.nome}
        onChange={handleInput}
        placeholder="Mensalidade"
        required
        pattern={"^.{3,}"}
        title={"O nome deve ter no mínimo 3 letras"}
        />
        <label>Tempo</label>
        <select value={form.tempo} onChange={handleInput}>
          <option value="1">1 mês</option>
          <option value="3">3 meses</option>
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="18">18 meses</option>
          <option value="24">24 meses</option>
          <option value="36">36 meses</option>
        </select>
        <Button>Simular</Button>
      </Formulario>
    </FormContainer>
  )
}

