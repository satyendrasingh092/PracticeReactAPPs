import React, {Component} from 'react'
import logo from '../logo.svg';
import {containerRouter} from "../configs/routeConfig";

export default class rootContainer extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
             <div style={{paddingTop:'20px'}}>
                 {containerRouter()}
             </div>
            </React.Fragment>)
    }
}