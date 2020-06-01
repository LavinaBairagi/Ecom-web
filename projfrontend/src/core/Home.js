import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
export default function Home() {
  console.log("API IS", API);

  return (
    <Base title= "Home Page">
<div>
    <CardGroup style={{color:"black"}}>
      <Card  className="card">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUOIbaBOs7avZG7luQAD-fRsuvjLWw6Oc9VCf3OVy0-Lh1VOll&usqp=CAU" />
        <Card.Body>
          <Card.Title>Tshirt</Card.Title>
          <Card.Text>
           Regular Black Tshirts
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">₹ 1500</small>
        </Card.Footer>
      </Card>
      <Card style={{ marginLeft:'40px'}}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeJ7Hnzx_cbFKaNxSsA3WAoaL4IzJCOzmvKHEWKSockwv_TNaQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>Tshirt</Card.Title>
          <Card.Text>
           Stylish White Tshirt
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">₹ 1440</small>
        </Card.Footer>
      </Card>
      <Card style={{ marginLeft:'50px'}}>
        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
        <Card.Body>
          <Card.Title >Tshirt</Card.Title>
          <Card.Text>
         white Tshirt
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">₹ 1200</small>
        </Card.Footer>
      </Card>
      <Card style={{ marginLeft:'50px'}}>
        <Card.Img  variant="top" src="https://rukminim1.flixcart.com/image/580/696/k12go7k0/t-shirt/v/b/y/s-ft9236-adidas-original-imafkqc9zqaezg6x.jpeg?q=50" />
        <Card.Body>
          <Card.Title>Tshirt</Card.Title>
          <Card.Text>
           Regular Red Tshirt
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">₹ 1600</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    
    </div>
    
    
    
        </Base>
  );
}
