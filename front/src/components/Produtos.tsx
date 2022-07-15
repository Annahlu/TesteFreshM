import React from 'react'; 
import {Navbar, Container} from "react-bootstrap";
import internal from 'stream';

type ProductProps = {
    name?: string;
    value?: Float32Array;
    id?:Int16Array;           
}
export function Product(props: ProductProps){
    const[products, setProducts] = React.useState<string[]>([
        'Prod1',
      ])
    return(<p> {props.name}</p>);
  
}

export default Product;
