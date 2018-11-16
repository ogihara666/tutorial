export default ({dispatch}) => next => action =>{
    console.log(!action.payload||!action.payload.then)
    console.log("ACTION",action);
    console.log("NEXT",next);
    console.log("DISPATCH",dispatch);
    return next(action);
}