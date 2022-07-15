import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import  Header  from "./components/Header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

    
type FormElem = React.FormEvent<HTMLFormElement>

interface IProduct{
  /**
   * Propriedades do produto
   */
  name: string
  price: string 
}

export default function App() {

  const[name, setName] = useState<string>("")
  const[price, setPrice] = useState<string>("")
  const[Products, setProducts] = useState<IProduct[]>([])
  
 
  /**
   * Gerencia o envia do formulário e redefine os valores para o padrão após o preenchimento
   */
  const handleSubmit = (e: FormElem) => {
    e.preventDefault()
    addProduct(name, price)
    setName("")
    setPrice("")
  }
  /**
   * Adiciona o novo produto a lista de produtos
   */
  const addProduct = (name: string, price: string) => {
    const NewProduct: IProduct[] = [...Products, {name, price}]
    setProducts(NewProduct)
  }
  /**
   * Apenas um teste para atualizar o produto, não usado pois não deu tempo, as funções de atualizar e deletar não foram implementadas 
   */
  const editProduct = (product: IProduct, name: string)=> {
    return (<h1> atualizou</h1>);
  }

return(
  <Fragment>
     <Header/>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imgPadrao.svg" />
      <Card.Body>
      <Card.Title> Produto </Card.Title>
      <Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
          <Form.Label>Insira uma imagem</Form.Label>
            <Form.Control type="file" placeholder='Escolha uma imagem'/>
        </Form.Group>
          <Form.Group className="mb-3" controlId="CadastroProduto">
            <Form.Label>Nome: </Form.Label>
                <Form.Control type="text" placeholder="Ex: macarrão" value={name} onChange={e => setName(e.target.value)}/>
        </Form.Group>
          <Form.Group>
          <Form.Label>Preço: </Form.Label>
          <Form.Control type="text" placeholder="Ex: 6.00" value={price} onChange={e => setPrice(e.target.value)}/>
          </Form.Group>
          <br></br>
          
          <Button variant="primary" type="submit">
          Cadastrar
          </Button>
        </Form>
        </Card.Text>
        </Card.Body>
      </Card>
      <section>
      {Products.map((product: IProduct, index: number)=> {
          //return (<div key={index}>{product.name}</div>);
          return(<Fragment key={index}> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./imgPadrao.svg" />
            <Card.Body>
            <Card.Title> Produto </Card.Title>
            <Card.Text>
          <Form>
          <Form.Group className="mb-3" controlId="CadastroProduto">
            <Form.Label>Nome: {product.name}</Form.Label>
          </Form.Group> 
          <Form.Group>
          <Form.Label>Preço: {product.price}</Form.Label>
          </Form.Group>

           <Button variant="warning"> Editar</Button>{' '}
           <Button variant="danger" disabled> Deletar</Button>{' '}
          </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      </Fragment>
    );})} 
      </section>
     </Fragment>);}
