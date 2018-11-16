import database from './shared/firebase/database';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAMPLE_PROMISE = 'SAMPLE_PROMISE';
export const FETCH_PHRASE_REQUEST = 'FETCH_PHRASES_REQUEST';
export const FETCH_PHRASE_SUCCESS = 'FETCH_PHRASES_SUCCESS';
export const ADD_PHRASE_REQUEST = 'ADD_PHRASE_REQUEST';
export const DELETE_PHRASE_REQUEST = 'DELETE_PHRASE_REQUEST';
export const DELETE_PHRASE_SUCCESS = 'DELETE_PHRASE_SUCCESS';
export const UPDATE_PHRASE_REQUEST = 'UPDATE_PHRASE_REQUEST';
export const UPDATE_PHRASE_SUCCESS = 'UPDATE_PHRASE_SUCCESS';
export const UPDATE_PHRASE_ERROR = 'UPDATE_PHRASE_ERROR';

export const login = ()=>dispatch=>{
    return dispatch(
        {
            type:LOGIN,
            payload:false
        }
    )
}

export const logout = () => dispatch =>{
    return dispatch({
        type:LOGOUT,
        payload:false
    }
    )
}

export const samplePromise = () => dispatch =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(resolve,5000);
    })
    promise.then(()=>{
        dispatch({
            type:SAMPLE_PROMISE,
            payload:false
        })
    })
}

export const fetchPhrase = () =>{
    dispatch(request(FETCH_PHRASES_REQUEST));

    database.on('child_added',snapshot=>{
        dispatch(received(
        FETCH_PHRASES_SUCCESS,{
            key:snapshot.key,
            ...snapshot.val()
        }
    ))})

    database.on('child_changed',snapshot=>{
        dispatch(received(
            UPDATE_PHRASE_SUCCESS,
            {
                key: snapshot.key, 
          ...snapshot.val() 
            }
        ))
    })

    database.on('child_removed',snapshot=>{
        dispatch(received(
            DELETE_PHRASE_SUCCESS,
            {
                key:snapshot.key
            }
        ))
    })
}

export const addPhrase = (phrase, author) => dispatch => {
    // Dispatching our ADD_PHRASE_REQUEST action
    dispatch(request(ADD_PHRASE_REQUEST));

    // Adding a new element by pushing to the ref.
    // NOTE: Once this is executed the listener 
    // will be on fetchPhrases (child_added).
    database.push({
      phrase,
      author
    });
  }

  export const deletePhrase = key => dispatch => {
    // Dispatching our DELETE_PHRASE_REQUEST action
    dispatch(request(DELETE_PHRASE_REQUEST));

    // Removing element by key
    // NOTE: Once this is executed the listener 
    // will be on fetchPhrases (child_removed).
    database.child(key).remove();
  }

  export const updatePhrase = (key, phrase, author) => dispatch => {
    // Dispatching our UPDATE_PHRASE_REQUEST action
    dispatch(request(UPDATE_PHRASE_REQUEST));

    // Collecting our data...
    const data = {
      phrase,
      author
    };

    // Updating an element by key and data
    database
      // First we select our element by key
      .child(key) 
      // Updating the data in this point
      .update(data) 
      // Returning the updated data
      .then(() => database.once('value')) 
      // Getting the actual values of the snapshat
      .then(snapshot => snapshot.val()) 
      .catch(error => {
        // If there is an error we dispatch our error action
        dispatch(request(UPDATE_PHRASE_ERROR));

        return {
          errorCode: error.code,
          errorMessage: error.message
        };
      });
  };

