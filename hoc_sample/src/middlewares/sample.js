export default ({dispatch}) => next => action =>{
    console.log("ACTION",action);
    console.log("NEXT",next);
    console.log("DISPATCH",dispatch);
}