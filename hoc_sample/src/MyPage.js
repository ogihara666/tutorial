import React,{Component} from 'react';
import {connect} from 'react-redux';
import requireAuth from './requireAuth';
import {bindActionCreators}from 'redux';
import {fetchPhrase,addPhrase,deletePhrase,updatePhrase} from './actions';


class MyPage extends Component{
    componentWillMount(){
        this.props.fetchPhrase();
        
    }
    render(){
        return (
            <div>
                あなたはログインをしています。
                このままサイトをお楽しみください。
            </div>
        ) 
    }
    
}

const mapStateToProps = ({phrases}) => ({
    phrases : phrases.phrases
})

const mapDispatchToProps = dispatch => bindActionCreators(
    [
        addPhrase,
        deletePhrase,
        fetchPhrase,
        updatePhrase
    ],
    dispatch
)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPage)