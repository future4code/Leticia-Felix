import React from 'react' 
import useBack from '../../util/useback'

const CriarViagem = () => {

    return (
        
        <div>

            CriarViagem
            <button onClick={useBack('/trips/list')}> Voltar para Lista de Viagens </button>

        </div>
)}

export default CriarViagem