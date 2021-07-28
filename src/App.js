import './App.css';
import React, { useState , useEffect } from "react";
import Home from './components/Home';
import Description from './components/Description';
import { Link, Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AddRecipe from './components/AddRecipe';
import Categorie from './components/Categorie';
import Contact from './components/Contact';
import axios from 'axios';
import Favorites from './components/Favorites';
function App() {
  
const [data,setdata] = useState([]);
const [recipes, setRecipes] = useState(data);
const values = async()=> {
  const response  = await fetch("http://localhost:3001/data");
  const result =await response.json();
  
  setdata(result)
}
useEffect(()=> {
  axios.get('http://localhost:3001/data')
  .then(res=> {
    console.log(res.data)
    setdata(res.data)
    setRecipes(res.data)
  })
 
},[])

  return (
    <Router>
        <div>
        <div className= 'navbar'>
        <div className="logo">Mes recettes</div>
            <div className="menus">
            <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li> 
            <li> 
              <Link to="/AddRecipe" >Add recipe</Link>
            </li>
            <li> 
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Favoris">My Favorites</Link>
            </li>
          </ul>
         </div> 
         </div>
      <Switch>
      <Route exact path="/"  ><Home data={data} recipes={recipes} setRecipes={setRecipes} /></Route>
      <Route  path="/Description/:id" ><Description data={data} /></Route>
      <Route  path="/AddRecipe" ><AddRecipe recipes={recipes}  setRecipes={setRecipes}/></Route>
      <Route path="/Favoris" component={Favorites}></Route>
      <Route  path="/Contact" ><Contact/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
