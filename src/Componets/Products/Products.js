import React from 'react';
import {Link} from 'react-router-dom';

const Products = ({listProducts}) => {
    return (
        <div>
            <h1>This is the page Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia esse dignissimos fugiat doloremque provident magnam vel! Nemo, exercitationem iusto debitis sed aliquam reiciendis ut facilis itaque sint? Aliquam minima obcaecati sequi illo nihil. Dolores officiis maxime dolorum iste repellendus omnis quibusdam! Accusantium porro autem ex iusto, rem tempore voluptatum sunt temporibus? Quo aspernatur doloribus ratione odio. Accusantium quas natus repellat veritatis ullam cupiditate obcaecati autem, explicabo tenetur culpa corporis aliquam laborum porro ad eaque praesentium iusto et architecto fugiat omnis quisquam dolores provident! Rem atque modi minima facere pariatur, nostrum voluptatem recusandae, obcaecati commodi, inventore illum aut accusantium. Neque.
            </p>
            {listProducts.map((Product)=>(
            <div key={Product.id}>
                <Link to={`/Product/${Product.id}`}>
                    <h2>{Product.name}</h2>
                </Link>
              
                
                
                <img src={Product.img} alt="product"/> 
            </div>
            ))}
        </div>
    )
}

export default Products
