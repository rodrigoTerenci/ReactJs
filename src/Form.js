import React from 'react'
class FormAddCostumer extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmint = this.handleSubmint.bind(this)

    }
    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmint(event){
        alert('O nome enviado '+ this.state.value)
        event.preventDefault()
    }
    renderAddCustomer(){
        return(
            <form onSubmit={this.handleSubmint}>
                <label>Nome
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        )

    }
}
export default FormAddCostumer