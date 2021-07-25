import React from "react";
import { Col, Row } from "react-bootstrap";
import Recipe from './Recipe'

const ListRecipes = (props) => {

    return (
      <>
      
     <div className="card-deck row">
         {props.recipes.map((recipe,index) =>
           
            <Recipe key={index}
            recipes={recipe}
              />
           
          )}
      </div>
      
    
       
      </>
);
}

export default ListRecipes;