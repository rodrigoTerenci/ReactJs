import React, {useState} from 'react'
import FormAddCostumer from './Form';

const formAddCostumer = new FormAddCostumer()

const App = () =>{
    const [addCustumer, setAddCost] = useState(false)
    const [items, setItems] = useState(['Eu','sei','eu','sei'])
    const [value, setValue] = useState('')
    const addItem = (item) =>{
        setItems([...items,item])
        console.log(item)
    }
   
    const removeItem = (item) =>{
        setItems([...items.slice(1)])
    }
    /*const handleChange =(EventTarget)=>{
        this.setValue(EventTarget.value)
    }*/
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
            <button onClick={() => setAddCost(true)}>+</button>
            {console.log(addCustumer)}
        </div>
    )
    /*const formAddCostumer = (
        <div>
            <form onSubmit={()=> addItem()}>
                <label>Nome
                <input type="text" value={value} onChange={()=>setValue({value})}/>
                </label>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )*/
    return(
        <div>
            <p>Rodriguinho WeB</p>
            <h2>Desenvolvimento Divertido</h2>
            {addCustumer ? formAddCostumer.render : console.log(addCustumer)}
            {renderShowHistory} 
            {renderAddCustomer}
            
        </div>
    )
};
export default App