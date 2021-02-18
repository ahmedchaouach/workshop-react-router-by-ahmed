import React from "react";
import './App.css';
import NavBar from './Componets/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {listProducts} from "./Data";

import Footer from './Componets/Footer/Footer';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';
import Products from './Componets/Products/Products';
import Product from './Componets/Product/Product';



function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route 
       exact 
       path="/Products"  
       render={()=> <Products listProducts = {listProducts}/>}
       />
       <Route exact path="/About"  component={About}/>
       <Route 
       exact
       path="/Product/:id"
       render={(defaultProps)=> <Product {...defaultProps} listProducts={listProducts}/>}
       />

     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
