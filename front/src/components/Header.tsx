import React from 'react'; 
import {Navbar, Container} from "react-bootstrap";
//import {BsShop} from "react-icons";


const Header: React.FC = (props: any) => {
    return ( 
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                DevMarket
            </Navbar.Brand>
        </Container>
    </Navbar>);
}

export default Header;
