import styled from 'styled-components';

export const FormContainer = styled.div`
width: 25rem;
height: 20rem;
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
margin-top: 8rem;
background-color: aquamarine;
border-radius: 50px;
box-shadow: 0px 4px 6px #00000029;
`

export const Formulario = styled.form`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
`

export const InputForm = styled.input`
  border: none;
  border-radius: 50px;
  width: 18rem;
  height: 1.8rem;
  margin: 0.5rem 0;
`

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  width: 9rem;
  height: 1.8rem;
  margin: 0.5rem 0;
  background-color: mediumslateblue;
`