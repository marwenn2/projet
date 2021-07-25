import React from "react";
import style from './recipe-module.css';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import { Link, Route,match } from 'react-router-dom';
import RatingRecipe from './RatingRecipe';
import StarRating from 'react-star-rating'
import ReactStars from "react-rating-stars-component";
import time from './time.png';
import Form from 'react-bootstrap/Form';


   const Recipe = props => {
    const ChangeRate = (rating) =>{
        alert(`you have givin ${rating} star rating for us`)
    }  

       return(
         <div className="col-sm-4">
        <div className="Card my-3" style={{marginLeft:20,marginBottom:20}}>
                    <img src={props.recipes.image} className="image"/>
                        <div>
                      <Link to ={`/Description/${props.recipes.id}`} className="recipeLabel" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                           <h1>{props.recipes.label}</h1>
                      </Link>
                      <p className="DescRecipe">                    
                           {props.recipes.desc}
                        </p>
                      <img src={time} className="image2"/>
                      
                    {props.recipes.time}
                    </div> 
                      <ReactStars size={30} onChange ={ChangeRate}/>   
                </div> 
                </div> 
       );};

export default Recipe;