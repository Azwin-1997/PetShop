import React from 'react'
import axios from 'axios'
import {Button, Card, ListGroup} from 'react-bootstrap';


function Productcard(props) {

const addTocart=(product)=>{
  const result = {...product}
  axios.get('http://localhost:3000/users').then((res)=>{
    res.data.map((user)=>{
      console.log(props.productid);
if(user.id == localStorage.getItem("login")){
  console.log(product);
  result.count=1;
  user.cart.push(result)
  axios.put(`http://localhost:3000/users/${user.id}`,user)
  alert("Item Added Successfully")
}
    })
  })

}

  return (
    <>
     <Card style={{ width: '18rem' }} key={props.productid}>
      <Card.Img variant="top" src={props.productimage} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={()=>addTocart(props)} variant="primary">Add To Cart</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default Productcard