import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route,Link } from 'react-router-dom'
import reducers from './reducers';
import Instruction from './Instruction';
import MyPage from './MyPage';
import { combineReducers } from 'redux';
import {connect} from 'react-redux';
import {login,logout,samplePromise} from './actions';
import requireAuth from './requireAuth';



class App extends Component {
  renderButton(){
    if(this.props.authenticated){
      return(
        <button onClick={(e)=>{this.props.logout();console.log("Hello Worlds")}}>SignOut</button>
      )
    }else{
      return(
        <button onClick={(e)=>{this.props.login();console.log("Hello Worlds")}}>SignIn</button>
      )
    }
  }
  renderHeader(){
    return(
      <ul>
        <li><Link to="/">Top</Link></li>
        <li><Link to="/mypage">MyPage</Link></li>
        <li><button onClick={this.props.samplePromise}>Promise</button></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }
  render() {
    return (
        <BrowserRouter>
        <div>
        {this.renderHeader()}
          <Route path="/" exact component={Instruction} />
          <Route path="/mypage" component={MyPage} />
          </div>
        </BrowserRouter>
        
    );
  }
}

const mapStateToProps =(state)=> {
  return{
    authenticated:state.auth.authenticated,
  }
}

export default connect(mapStateToProps,{
  login,
  logout,
  samplePromise
})(App);

