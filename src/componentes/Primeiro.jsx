import React from 'react'

function Primeiro(){
    return (
     <div>
            <h1>Primeiro</h1>
            <h2>Exemplo de um componente</h2>

    </div>
    )
}

//caso terirar a div dará erro,nisso é necessário usar
// tags vazias <> </>
//ou React.Fragment
//dessa forma retornara mais de um elemento 

export default Primeiro //retornando a pagina,é um componente

// ---------------------> da forma arrow seria:

// export default () => 
//      <>
//             <h1>Primeiro</h1>
//             <h2>Exemplo de um componente</h2>

//     </>
    

    