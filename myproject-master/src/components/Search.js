import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import search from './search.png';

const Search = (props) => {
 
const searchRecipe = (e)  =>
{
    if(e.target.value!=='')
    props.setRecipes(props.data.filter(recipe => recipe.label.includes(e.target.value)))
    else props.setRecipes(props.data.filter(recipe => recipe.id !== 0  ))
}
return  (
<div>
  <form className="search-form" align="left">
     
  <input className="search-bar" onChange={(e)=>searchRecipe(e)} type="text" placeholder="Search recipe"/>
  <button type="submit" className="search-button">
        <img src={search} />
    </button> 
  </form>
  
 </div>
 );
};

export default Search;
