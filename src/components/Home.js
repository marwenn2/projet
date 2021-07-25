import React, { useState , useEffect } from "react";
import Search from "./Search";
import ListRecipes from "./ListRecipes";
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import Categorie from "./Categorie";
import AddRecipe from "./AddRecipe";
const Home = (props) => {
   
    return  (
      <>
      
        <div className="container">
      <Row>
      <div>
          <Col>
      <Categorie setRecipes={props.setRecipes} data={props.data} />
            </Col>
      </div>
      </Row>
      <Row>
      <div>
          <Col>
      <Search setRecipes={props.setRecipes} data={props.data} />
            </Col>
      </div>
      </Row>
      <div className="recipes">
         
      <ListRecipes recipes={props.recipes} />
          
      </div>
      
      
      <br></br>
      </div>
      
    </>
        
  );


}

export default Home;