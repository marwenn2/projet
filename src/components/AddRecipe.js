import React, { useState , useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Col, Row, Jumbotron, FormGroup, FormLabel } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ListRecipes from "./ListRecipes";
import { Input } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddRecipe = (props) => {

  const history = useHistory()
  const [label,setlabel]=useState("");
  const [time,settime]=useState("");
  const [desc,setdescription]=useState("");
  const [ingredients,seting]=useState("");
  const [recipe,setrecipe]=useState("");
  const [image,setimg]=useState("");
  const [email,setemail]=useState("");
  const [categorie,setcat]=useState("entree");
    
      const handleAjout=()=> {
          const id = props.recipes.length+1;
          const rating ="";
          const Recette = { id,label,time,desc,ingredients,recipe,categorie,rating,image,email}
          axios.post("http://localhost:3001/data",Recette)
          .then(res=> console.log(res.data))
          console.log(Recette)
          history.push("/");
      }
    return(
      <>
     
    <div>
    <Container>
    <Row>
      <Col md={{ span: 7, offset: 3 }}>
        <Jumbotron>
          <h1> New recipe </h1>
          
            
            
        
          <Form>
            <FormGroup>
              <label htmlFor="Name">Name</label>
              <Input type="text" placeholder="Name" id="Name" required onChange={(e)=> setlabel(e.target.value)}/>
            </FormGroup>          
            <FormGroup>
              <label htmlFor="Email">Email</label>
              <Input type="email" placeholder="Email" id="Email" required onChange={(e)=> setemail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Time">Time</label>
              <Input type="text" placeholder="Time" id="Time" required onChange={(e)=> settime(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label htmlFor="description">Description</label>
              <Input type="text" placeholder="description" id="description" required onChange={(e)=> setdescription(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Ingrediants">Ingrediants</label>
              <Input type="text" placeholder="Ingrediants" id="Ingrediants" required onChange={(e)=> seting(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Recipe">Recipe</label>
              <Input type="textarea" rows={8} placeholder="Recipe" id="Recipe" required onChange={(e)=> setrecipe(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <br/>
              <label htmlFor="categorie"> categorie </label>
              <select className="select-style" id="categorie" onChange={(e)=> setcat(e.target.value)}>
                <option value="entree">Entrée</option>
                <option value="plat">Plat</option>
                <option value="patisserie">Patisserie</option>
              </select>
            </FormGroup>
            <FormGroup>
              <br/>
              <label htmlFor="Img">Image</label>
              <Input type="text"  placeholder="Image" id="Img" required onChange={(e)=> setimg(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <br/>
            <Button variant="primary"  type="submit"  onClick={()=>handleAjout()}>
            Submit
            </Button>
            </FormGroup>
            </Form>
        </Jumbotron>
      </Col>
    </Row>
    </Container>
    <div className="recipes">
         
         <ListRecipes recipes={props.recipes} />
             
         </div>

  </div>
      
      </>
    );

    
}

export default AddRecipe;
