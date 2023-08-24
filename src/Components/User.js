import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Get } from "../Redux/Action/Action";

function User() {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(Get())
  }, []);
  const products=useSelector(state=>state.products)
  console.log(products);
  
  
  return (
    <div
      style={{
        display: "flex",
        gap: "5rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products.map((e) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e.image_url} />
            <Card.Body>
              <Card.Title>{e.product_name}</Card.Title>
              <Card.Text>{e.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
              <Button variant='danger' onClick={()=>dispatch(Delete(e.id))}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default User;
