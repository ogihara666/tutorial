import React,{Component} from 'react';
import {connect} from 'react-redux';
import requireAuth from './requireAuth'

class MyPage extends Component{
    render(){
        return (
            <div>
                あなたはログインをしています。
                このままサイトをお楽しみください。
            </div>
        ) 
    }
    
}
export default connect(null)(requireAuth(MyPage));