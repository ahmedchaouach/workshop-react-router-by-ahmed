import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


const Product = ({ match, listProducts }) => {
    const [Product, setProduct] = useState({});
    useEffect(() => {
        setProduct(listProducts.find((Product)=> Product.id === +match.params.id));
    
    }, [])
    return (
        <div>
        <div>
           <h1>{Product.name}</h1>
           <h3>{Product.description}</h3>
           <img src={Product.img} alt="product"  />
      </div>
      <Link to="/products">
        <Button variant="info">Go Back</Button>
      </Link> 
    </div>
    )
}

export default Product
