 import './App.css'


import React from 'react';



import Primeiro from './componentes/Primeiro'
import ComParametro from './componentes/ComParametro'
import ComFilhos from './componentes/ComFilhos'
import Card from './componentes/layout/Card'
import Repeticao from './componentes/repeticao'
import Condicional from './componentes/Condicional'
import CondicionalIf from './componentes/CondicionalIf'



export default (props) => (
    <div className="App">
        <Card titulo="Condicional">
        <CondicionalIf numero ={11}></CondicionalIf>
        </Card>
        <Card titulo="Condicional">
        <Condicional numero ={10}></Condicional>
        </Card>
        <Card titulo="Lista">
        <Repeticao> </Repeticao></Card>
        <Card titulo ="Componentes com Filhos">
        <ComFilhos>
            <ul>
            <li> Ana </li> 
            <li> Bea </li>  
            <li> Carlos </li>
            <li> Daniel </li> 
            </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componente com Parametro">
        <ComParametro titulo = "oii titulo" //instanciando um componente
        subtitulo = "oii subtitulo"/>
        </Card>
        <Card titulo = "Primeiro Componente">
                <Primeiro/>
        </Card> 
        <Card titulo = "Exercicio X "> Conteudo </Card>
      

        

      
       
    </div>
);