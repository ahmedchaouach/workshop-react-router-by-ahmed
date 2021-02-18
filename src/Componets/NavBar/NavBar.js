import React from 'react'; 
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
         <Navbar bg="light" expand="lg">
           <Navbar.Brand href="#home">Watches Shop</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
               <NavLink exact to="/" className="nav-link" activeClassName="selected-link" >Home</NavLink>
               <NavLink to="/Products" className="nav-link" activeClassName="selected-link">Products</NavLink>
               <NavLink to="/About" className="nav-link" activeClassName="selected-link" >About</NavLink>
             </Nav>
           </Navbar.Collapse>
         </Navbar>   
        </div>
    )
}

export default NavBar
