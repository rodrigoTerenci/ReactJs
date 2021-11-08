import React, {useState} from 'react'


const App = () =>{
    const [addCustumer, setAddCost] = useState(false)
    const [items, setItems] = useState(['Eu','sei','eu','sei'])
    const [value, setValue] = useState('')
    const addItem = (item) =>{
        setItems([...items,item])
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
        </div>
    )
    const formAddCostumer = (
        <div>
            <form onSubmit={()=> addItem('teste')}>
                <label>Nome
                <input type="text" /*onChange={setValue({value: EventTarget.value})}*//>
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
            {addCustumer ? formAddCostumer : console.log(addCustumer)}
            {renderShowHistory} 
            {renderAddCustomer}
            
        </div>
    )
};
export default App