import React from 'react' 
import useBack from '../../util/useback'

const AprovarRejeitarViagens = () => {

    return (
        
        <div>
            AprovarRejeitarViagens
            <button onClick={useBack('/trips/list')}> Voltar para Lista de Viagens </button>
        </div>
        

)}

export default AprovarRejeitarViagens