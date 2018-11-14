import React , {Component} from 'react';
import {connect} from "react-redux";

export default ChildComponent =>{
    
    class ComposedComponent extends Component{
        shouldLeaveAway(){
            if(!this.props.authenticated){
                this.props.history.push('/');       
            }
        }
        componentDidMount(){
            this.shouldLeaveAway()
        }
        componentDidUpdate(){
            this.shouldLeaveAway()
        }
        render(){
            return <ChildComponent {...this.props}/>
        }
    }
    const mapStateToProps =(state)=> ({
        authenticated:state.auth.authenticated,
    })
    return connect(mapStateToProps)(ComposedComponent);
}