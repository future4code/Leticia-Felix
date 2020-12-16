import React from 'react';
import useBack from '../../util/useback';
import useProtectedPage from '../../util/useProtectedPage';
import styled from 'styled-components';

const AprovarRejeitarDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`

const AprovarRejeitarViagens = () => {
    useProtectedPage()

    return (
        
        <AprovarRejeitarDiv>
            AprovarRejeitarViagens
            <button onClick={useBack('/trips/list')}> Voltar para Lista de Viagens </button>
        </AprovarRejeitarDiv>
        

)}

export default AprovarRejeitarViagens