import useBackHome from '../../util/useback';
import styled from 'styled-components';
import Formulario from './Formulario';


const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`
// const HomeImg = styled.img`
//     display: flex;
//     width: 100vw;
//     height: auto;    
//     position: absolute;
//     z-index: 0;
// `
// const OForm = styled.div`
//     background-color: white;
//     width: 50vw;
//     height: 26vh;
//     display: flex;
//     flex-direction: column;
// `

const PaginaInscricaoViagem = () => {

    return (
        <FormDiv>
            <Formulario/>
            <button onClick={useBackHome('/')}> Voltar para Home </button>
        </FormDiv>
)}

export default PaginaInscricaoViagem;