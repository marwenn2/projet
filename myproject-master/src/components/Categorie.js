import React, { useState , useEffect } from "react";
import Select from 'react-select'
const Categorie = (props) => {
    
    const options=[{value:'all',label:"Toutes les catégories"},{value:'entree',label:'entree'},{value:'plat',label:'Plat'},{value:"patisserie",label:'Patisserie'}]
    const [selected,setselected]= useState(options[0].value)
    
    useEffect(()=> {
       
        if (selected.value !== 'all') 
        {
        props.setRecipes(props.data.filter(recipe => recipe.categorie == (selected.value)  ))
        }
        else if(selected.value==='all')
        {
            props.setRecipes(props.data.filter(recipe => recipe.id !== 0  ))
        }
    },[selected])
    return (
<div>
        
        <Select options={options} onChange={setselected} value={selected} defaultValue={{ label: 'Toute les catégories', value: 'all' }} placeholder="categorie"/>


</div>

    );
}

export default Categorie;
