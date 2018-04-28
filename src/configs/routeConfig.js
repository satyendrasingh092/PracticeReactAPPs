import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {baseContainer, profileContainer, rootContainer} from "./loadableConfig"
import React from 'react'

export const containerRouter = () => {
    return <React.Fragment>
        <Route exact path="/" component={baseContainer}/>
        <Route exact path="/user/:userName" component={profileContainer}/>
    </React.Fragment>
}

export const configureRouteForStore = (store) => {
    return (<Provider store={store}>
        <Router>
            <Route path="/" component={rootContainer}/>
        </Router>
    </Provider>)
}