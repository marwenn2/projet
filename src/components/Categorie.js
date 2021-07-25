import React, { useState , useEffect } from "react";
import Select from 'react-select'
const Categorie = (props) => {
    
    const filtre = (e) =>  {console.log((e.target.value));
    
        if (e.target.value !== 'all') 
        {
        props.setRecipes(props.data.filter(recipe => recipe.categorie == (e.target.value)  ))
        }
        else
        {
            props.setRecipes(props.data.filter(recipe => recipe.id !== 0  ))
        }
    }  
    return (
<div>
        
<div className="select-style">
            <select onChange={e => { filtre(e)}} >
                <option value="all">Categorie</option>
                <option value="all">All</option>
                <option value="entree">Entrées</option>
                <option value="plat">Plats</option>
                <option value="patisserie">Patisserie</option>
                

            </select>
        </div>


</div>

    );
}

export default Categorie;
