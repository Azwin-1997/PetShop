import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {Button, Card, ListGroup} from 'react-bootstrap'




function Mycart() {

const handleremove = async (productid)=>{
  // const userid = localStorage.getItem('login')
  console.log(productid);
  axios.delete(`http://localhost:3000/users/${localStorage.getItem("login")}/cart/${productid}`).then((res)=>{
    console.log(res);

  }).catch((err)=>{
    console.log(err);
  })
  console.log(productid);
  axios.get(`http://localhost:3000/users/${localStorage.getItem("login")}/cart/`).then((res)=>{
    console.log(res);

  }).catch((err)=>{
    console.log(err);
  })
}

    const[cart , setCart]=useState([])
useEffect(()=>{
    axios.get(`http://localhost:3000/users/${localStorage.getItem("login")}`).then((res)=>{
        console.log(res.data);
       
            setCart(res.data.cart)
       
    })
},[])

  return (
    <div>
       
        {cart.map((product)=>{
            return(
            <Card style={{ width: '18rem' }} key={product.productid}>
            <Card.Img variant="top" src={product.productimage} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroup.Item>{product.price}</ListGroup.Item>
              <ListGroup.Item>Qty : {product.count}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="success">Buy now</Button>
              <Button onClick={()=>handleremove(product.productid)} variant="danger">Remove Item</Button>
              </Card.Body>
          </Card>
            )
        })}
        
    </div>
  )
}

export default Mycart