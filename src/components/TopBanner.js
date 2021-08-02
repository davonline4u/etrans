import React from 'react';
import '../products.css';
import Card from 'react-bootstrap/Card';
const topbanner = {
  fontSize: "100px"
}
function TopBanner() {
    return(
        <div>
            <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
    </Card.Body>
  </Card>
                  
       </div>
    )
}



export default TopBanner;