import './App.css';
import React, { useState , useEffect } from "react";
import Home from './components/Home';
import Description from './components/Description';
import { Link, Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AddRecipe from './components/AddRecipe';
import Categorie from './components/Categorie';
import Contact from './components/Contact';

function App() {
  const data =[ 
    {
      "id":1,
      "label":"Salade niçoise",
      "time":"1 h 30 min",
      "desc":"Une recette de salade niçoise facile et rapide à réaliser ! ",
      "ingredients":"4 oeufs ,quelques feuilles de mesclun et / ou de basilic frais ,1 boîte 200 g de thon égoutté,15-20 olives noires",
      "recipe":"Commencez par préparer les oeufs durs, en les plongeant délicatement dans une casserole d'eau frémissante, et en les faisant cuire 10 min à partir de la reprise de l'ébullition. Pendant ce temps, coupez vos tomates en quartiers, et votre poivron en rondelles ou en lamelles, et vos radis en tranches, puis égouttez la boîte de thon ainsi que les les filets d'anchois. Quand les oeufs sont cuits, plongez les dans l'eau froide puis écalez-les et tranchez-les en 6 ou 8 quartiers.",
      "categorie":"entree",
      "rating":"",
      "image":"https://img.cuisineaz.com/660x660/2013/12/20/i34581-salade-nicoise-rapide.jpg",
    },
    {
      "id":5,
      "label":"Salade niçoise",
      "time":"1 h 30 min",
      "desc":"Une recette de salade niçoise facile et rapide à réaliser ! ",
      "ingredients":"4 oeufs ,quelques feuilles de mesclun et / ou de basilic frais ,1 boîte 200 g de thon égoutté,15-20 olives noires",
      "recipe":"Commencez par préparer les oeufs durs, en les plongeant délicatement dans une casserole d'eau frémissante, et en les faisant cuire 10 min à partir de la reprise de l'ébullition. Pendant ce temps, coupez vos tomates en quartiers, et votre poivron en rondelles ou en lamelles, et vos radis en tranches, puis égouttez la boîte de thon ainsi que les les filets d'anchois. Quand les oeufs sont cuits, plongez les dans l'eau froide puis écalez-les et tranchez-les en 6 ou 8 quartiers.",
      "categorie":"entree",
      "rating":"",
      "image":"https://img.cuisineaz.com/660x660/2013/12/20/i34581-salade-nicoise-rapide.jpg",
    },
    {
      "id":4,
      "label":"Salade niçoise",
      "time":"1 h 30 min",
      "desc":"Une recette de salade niçoise facile et rapide à réaliser ! ",
      "ingredients":"4 oeufs ,quelques feuilles de mesclun et / ou de basilic frais ,1 boîte 200 g de thon égoutté,15-20 olives noires",
      "recipe":"Commencez par préparer les oeufs durs, en les plongeant délicatement dans une casserole d'eau frémissante, et en les faisant cuire 10 min à partir de la reprise de l'ébullition. Pendant ce temps, coupez vos tomates en quartiers, et votre poivron en rondelles ou en lamelles, et vos radis en tranches, puis égouttez la boîte de thon ainsi que les les filets d'anchois. Quand les oeufs sont cuits, plongez les dans l'eau froide puis écalez-les et tranchez-les en 6 ou 8 quartiers.",
      "categorie":"entree",
      "rating":"",
      "image":"https://img.cuisineaz.com/660x660/2013/12/20/i34581-salade-nicoise-rapide.jpg",
    },
    {
    "id":2,
    "label":"Crèpe",
    "time":"30 min",
    "desc":"Une recette de crêpes facile et rapide à réaliser ! Ces crêpes seront déclinables en version salée ou sucrée.",
    "ingredients":"4 oeufs ,farine ,levures,beurre",
    "recipe":"melanger les oeufs avec de la farine,ajouter...",
    "categorie":"patisserie",
    "rating":"",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbXP11Ww0_mKUFxGtpJt7jLCYx52R6PZROA&usqp=CAU",
  },
  {
    "id":3,
    "label":"Escalope à la crème",
    "time":"1 h",
    "desc":"Une recette facile et rapide à réaliser ! Pour les amoureux de la crème",
    "ingredients":"escalope,crème fraiche,fromage",
    "recipe":"melanger ......",
    "categorie":"plat",
    "rating":"",
    "image":"data:image/jpeg;base64,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",
  }
]
const [recipes, setRecipes] = useState(data);
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
              <Link to="/AddRecipe">Add recipe</Link>
            </li>
            <li> 
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
         </div> 
         </div>
      <Switch>
      <Route exact path="/"  ><Home data={data} recipes={recipes} setRecipes={setRecipes} /></Route>
      <Route  path="/Description/:id" ><Description data={data} /></Route>
      <Route  path="/AddRecipe" ><AddRecipe recipes={recipes} /></Route>
      <Route  path="/Contact" ><Contact/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
