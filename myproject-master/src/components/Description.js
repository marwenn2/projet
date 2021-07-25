import React from "react";
import { Link, Route, match,useParams } from 'react-router-dom';
import time from './time.png';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';

const Description = ({match,data}) => {
//utiliser find et match.id et afficher la description
console.log(data)
var { id } = useParams();
var recipe= data.find(m => m.id == id);
console.log(id)

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
      </Jumbotron>
        </Col>
        </Row>
        </Container>
        </>
)
}
export default Description ;