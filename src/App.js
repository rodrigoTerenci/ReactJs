import React from 'react'
// import Button from './Button'

const buttonA = <button>Historico do Clientes</button>

const buttonB = <button>Cadastrar Cliente  </button>

const hasCustumer = true
const App = () =>{
    /*const renderShowHistory = (
        <div> 
             <p>Clique no botão abaixo para visualizar o hitórico dos clientes</p>
             <br/>
             {buttonA}
         </div>
    )*/
    const renderAddCustomer = (
        <div>
            Clique aqui para cadastra um novo Cliente
            <br/>
            {buttonB}
        </div>
    )
    return(
        <div>
            <p>Rodriguinho WeB</p>
            <h2>Desenvolvimento Divertido</h2>
            {renderAddCustomer}
           {/*/hasCustumer ? renderShowHistory() : renderAddCustomer()*/}
            {/* <Button /> */}
        </div>
    )
};
export default App