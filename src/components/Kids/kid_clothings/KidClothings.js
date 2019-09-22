import React from 'react'
import {Card, Button} from 'react-bootstrap'
function KidClothings(props)
{
    return(
        <div style={{ display:"inline-flex"}}>
        <Card style={{ width: '18rem'}}>
<Card.Img variant="top" src={props.img} style={{height: '15rem'}} />
<Card.Body>
<Card.Title>{props.name}</Card.Title>
<Card.Text>
Price:{props.price}
</Card.Text>
<Button variant="primary">Add to cart</Button>
</Card.Body>
</Card></div>
    )
}
export default KidClothings