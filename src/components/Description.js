import React from "react";
import { Link, Route, match,useParams, useHistory } from 'react-router-dom';
import time from './time.png';
import { Container, Col, Row, Jumbotron, Button } from 'react-bootstrap';
import axios from "axios";

const Description = ({match,data}) => {
//utiliser find et match.id et afficher la description
console.log(data)
var { id } = useParams();
var recipe= data.find(m => m.id == id);
console.log(id)
const history=useHistory()
const handledelete = ()=> {
  axios.delete(`http://localhost:3001/data/${id}`)
  .then(res=> console.log(res.data))
  history.push('/');
}
return (
        <>
        <Container>
      <Row>
        <Col md={{ span: 10, offset: 3 }}>
        <Jumbotron>
        <div><h1>{recipe.label}</h1></div>
        <img src={recipe.image} className="image"/>
        <img src={time} className="image2"/>
                      
        {recipe.time}
      <h1>Ingrédients </h1>
      <p> {recipe.ingredients}</p>
      <h1>Préparation</h1>
      <p> {recipe.recipe} </p>
      <Button variant="danger" onClick={()=> handledelete()}>Delete</Button>
      </Jumbotron>
        </Col>
        </Row>
        </Container>
        </>
)
}
export default Description ;