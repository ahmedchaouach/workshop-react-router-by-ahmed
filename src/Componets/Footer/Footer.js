import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {FaYoutube, FaFacebook, FaInstagram} from 'react-icons/fa';



const Footer = () => {
    return (
        <div>
          <Card className="text-center">
  
            <Card.Body>
              <Card.Title>Watches Shop</Card.Title>
              <Card.Text>
                Rue el Souahel, impasse saida smaya, Numéro 6 , 2ème étage
              </Card.Text>
              <Button variant="primary">{<FaInstagram/>}</Button>
              <Button variant="primary">{<FaFacebook/>}</Button>
              <Button variant="primary">{<FaYoutube/>}</Button>
              
              
              
           </Card.Body>
           <Card.Footer className="text-muted">Powered by Chaouach Ahmed </Card.Footer>
         </Card>  
         
        </div>
    )
}

export default Footer
