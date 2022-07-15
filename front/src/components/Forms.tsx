import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

class Forms extends Component{
  
    state = {
        name: ''
    }

  //metodo para cadastro
  handleInputChange = (e) =>{
    this.setState ({
        name: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault()

    let {name} = this.state
    name = name
    console.log("Funcionou", name)

}

    render(){
        const name = this.state;

        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome:  
                        <input onChange={this.handleInputChange} type='text' placeholder='Nome'/> 
                    </label>   
                    <br></br>
                    <label>
                        Valor:  
                        <input type='text' placeholder='Valor'/>  
                    </label>  
                    <br></br>
                    <Button type="submit" variant="primary">Criar novo produto</Button>{' '}
                </form>
            </section>);
        }
    } 
//  <div>Nome que a pessoa digitou:  { name}  </div> 
export default Forms;