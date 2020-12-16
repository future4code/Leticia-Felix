import React from 'react';
import useBack from '../../util/useback';
import useProtectedPage from '../../util/useProtectedPage'
import styled from 'styled-components';

const CriarViagemDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`


const CriarViagem = () => {
    // const history = useHistory()
    useProtectedPage()



    return (
        
        <CriarViagemDiv>

            CriarViagem
            <button onClick={useBack('/trips/list')}> Voltar para Lista de Viagens </button>

        </CriarViagemDiv>
)}

export default CriarViagem;