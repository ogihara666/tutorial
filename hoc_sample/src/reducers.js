import {
    LOGIN,
    LOGOUT,SAMPLE_PROMISE,
    FETCH_PHRASE_SUCCESS,
    DELETE_PHRASE_SUCCESS,
    UPDATE_PHRASE_SUCCESS,} from './actions';


const initialState = {
    authenticated:"",
    errorMessage:"",
    phrases:[],
}


export default function(state=initialState,action){
    switch(action.type){

        case LOGIN:
        return {...state,authenticated:true};
        case LOGOUT:
        return {...state,authenticated:false};
        case SAMPLE_PROMISE:
        return state;
        case FETCH_PHRASE_SUCCESS: {
            const { payload: phrase } = action;
    
            const newPhrases = [...state.phrases, phrase];
    
            return {...state, 
              phrases: newPhrases
        };
          }
    
          case DELETE_PHRASE_SUCCESS: {
            const { payload: deletedPhrase } = action;
    
            const filteredPhrases = state.phrases.filter(
              phrase => phrase.key !== deletedPhrase.key
            );
    
            return {...state, 
                phrases: filteredPhrases
          };
          }
    
          case UPDATE_PHRASE_SUCCESS: {
            const { payload: updatedPhrase } = action;
    
            const index = state.phrases.findIndex(
              phrase => phrase.key === updatedPhrase.key
            );
    
            state.phrases[index] = updatedPhrase;
    
            return {...state, 
                phrases: state.phrases
          };
          }
        default:
        return state;
    }
}