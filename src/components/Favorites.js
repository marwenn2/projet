import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import Reducer from "../redux/reducers/rootReducer";
import ListRecipes from "./ListRecipes";
import time from './time.png';
import { Button } from "react-bootstrap";
import {removefromFav} from '../redux/actions/Actions'
const RenderDish =(props)=> {

    const dispatch = useDispatch();
return(
    <div className="card-deck row">
        {props.recette.map((elem,index)=> {
            return(
                <div className="col-sm-4" key={index}>
                    <div className="Card my-3" style={{marginLeft:20,marginBottom:20}}>
                    <img src={elem?.image} className="image"/>
                        <div>
                           <h1>{elem?.label}</h1>
                      <p className="DescRecipe">                    
                           {elem?.desc}
                        </p>
                      <img src={time} className="image2"/>
                      
                    {elem?.time}
                    </div> 
                    <Button onClick={()=>dispatch(removefromFav(elem.id))}></Button>
            </div>
            </div>
            )
        })}

    </div>
)
}
const Favorites = ()=> {

    const fav= useSelector(state=>state.Reducer.favoris);
    
    console.log(fav)
    return (
        <>
         {fav.length>0 ?     
              <RenderDish recette={fav}/>               
              
                         :<p>Vous n'avez pas de favoris</p> }
        </>
        )
}

export default Favorites;
