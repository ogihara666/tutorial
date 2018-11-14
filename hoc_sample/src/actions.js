export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAMPLE_PROMISE = 'SAMPLE_PROMISE';

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