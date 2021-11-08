import React, {useState} from 'react'


const App = () =>{
   // let hasCustumer = false
    const [items, setItems] = useState(['Eu','sei','eu','sei'])
    
    const addItem = (item) =>{
        setItems([...items,item])
    }
    const removeItem = (item) =>{
        setItems([...items.slice(1)])
    }
    const renderShowHistory = (
        <div> 
             <p>Lista de Clientes</p>
             <ul>
                 {items.map(item =><li>{item}</li>)}
             </ul>
         </div>
    )
    const renderAddCustomer = (
        <div>
            Clique aqui para cadastra um novo Cliente
            <br/>
            <button onClick={() => addItem('paranoia')}>+</button>
        </div>
    )
    const formAddCostumer =(
        <div>
            <form onSubmit={this.renderAddCustomer} style={{display:'flex', width:'50vw', height:'50vh', 
            backgroundColor:'black', opacity:50}}>
                <label>Nome
                <input type="text"/>
                </label>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
    return(
        <div>
            <p>Rodriguinho WeB</p>
            <h2>Desenvolvimento Divertido</h2>
            
            {renderShowHistory} 
            {renderAddCustomer}
            
        </div>
    )
};
export default App