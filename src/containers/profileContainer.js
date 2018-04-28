import React,{Component} from 'react'
import I from 'immutable'
import {connect } from 'react-redux'
import ProfilePage from "../components/ProfilePage";
import {setUserInfo} from "../actions/searchAction";

class profileContainer extends Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
        let userName = this.props.match.params.userName
        let url = "https://api.github.com/users/"+userName + '/repos'
        let self = this
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
               self.props.setUserInfo(json)
            })
    }

    onChangeHandler(e){
        let userName = this.props.userName
        let selectedValue = e.target.value
        let url = "https://api.github.com/users/"+userName + '/repos?sort='+selectedValue
        let self = this
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                self.props.setUserInfo(json)
            })
    }

    render(){
        return(
            <div>
                <div>Profile Container</div>
               <ProfilePage details={this.props.userInfo} onChangeHandler={this.onChangeHandler.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps) {
    return {
        userName : ownProps.match.params.userName,
        userInfo : state.app.getIn(['baseReducer','userInfo'],I.List())
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUserInfo : (info) => dispatch(setUserInfo(info))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(profileContainer)