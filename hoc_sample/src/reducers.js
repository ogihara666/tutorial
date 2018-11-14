import {LOGIN,LOGOUT} from './actions';


const initialState = {
    authenticated:"",
    errorMessage:""
}


export default function(state=initialState,action){
    switch(action.type){

        case LOGIN:
        return {...state,authenticated:true};
        case LOGOUT:
        return {...state,authenticated:false};
        default:
        return state;
    }
}