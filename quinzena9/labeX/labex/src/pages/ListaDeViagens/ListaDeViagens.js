import React, { useEffect } from 'react' 
import { useHistory } from 'react-router-dom'
import useBack from '../../util/useback'
import useProtectedPage from '../../util/useProtectedPage'
import styled from 'styled-components';

const ListaDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`

const ListaDeViagens = () => {
    const history = useHistory()
    useProtectedPage()
    
    

    return (
        
        <ListaDiv>
            ListaDeViagens
            <button onClick={useBack('/')}> Voltar para Home </button>

        </ListaDiv>

)}

export default ListaDeViagens