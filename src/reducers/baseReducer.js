import I from 'immutable'
import {SET_USER_INFO, SET_USER_LIST} from "../actions/searchAction";

const InitialState = I.fromJS({
    userList : [],
    userInfo : []
})

export default function baseReducer(state=InitialState,action={}) {
    switch (action.type){
        case SET_USER_LIST :
            return state.set('userList',I.fromJS(action.payload))
        case SET_USER_INFO :
            return state.set('userInfo',I.fromJS(action.payload))
        default :
            return state
    }
}