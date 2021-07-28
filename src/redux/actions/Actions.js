import {ADD_TO_FAV,RM_FROM_FAV} from './ActionTypes'
export const addToFav=(payload)=> {
    return({type:ADD_TO_FAV,payload})
}
export const removefromFav=(payload)=> {
    return({type:RM_FROM_FAV,payload})
}
