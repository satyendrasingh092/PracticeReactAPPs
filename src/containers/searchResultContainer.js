import React, {Component} from 'react'
import I from 'immutable'
import {connect} from 'react-redux'
import SearchComponent from "../components/SearchComponent";
import UserListComponent from "../components/UserListComponent";
import {fetchSearchData} from "../actions/searchAction";
import PaginationComponent from "../components/PaginationComponent";

class searchResultContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '980px'}}>
                    <div style={{display: 'flex', justifyContent: 'center' ,width:'100%'}}>
                        <SearchComponent inputChangeHandler={this.inputChangeHandler.bind(this)}/>
                    </div>
                    <hr/>
                    <div style={{display: 'flex', justifyContent: 'center' ,width:'100%',height:'400px',overflowY:'auto'}}>
                        <UserListComponent userList={this.props.userList}/>
                    </div>
                    <PaginationComponent paginationClickHandler={this.paginationClickHandler}/>
                </div>
            </div>
        )
    }

    paginationClickHandler = (e) => {
        console.log(e)
    }

    inputChangeHandler(e) {
        let searchValue = e.target.value
       this.props.fetchSearchData(searchValue)
    }
}

function mapStateToProps(state) {
    return {
        userList : state.app.getIn(['baseReducer','userList'],I.List())
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSearchData : (val) => dispatch(fetchSearchData(val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(searchResultContainer)