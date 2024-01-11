import React, { useEffect, useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import './api.css'



function Apifetch() {

const[product,setProduct]=useState([])

    const base_url="https://dummyjson.com/products"
    

    //api fetch

    const fetchdata=async()=>{
const result=await fetch(base_url)
.then(result=>result.json())//json=>array
.then(products=>setProduct(products.products))
    }
    console.log(product);
    useEffect(()=>{
        fetchdata() 
    },[])
    
  return (
    <div className='card'>{
        product.map(item=>(
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail}/>
      <Card.Body>
        <Card.Title>{item.title} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        )
            
            )

    }
        
        </div>
  )
}

export default Apifetch
