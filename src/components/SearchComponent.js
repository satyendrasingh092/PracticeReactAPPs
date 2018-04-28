import React,{Component} from 'react'

export default class SearchComponent extends Component{

    render(){
        return(
            <div style={{width: '100%'}}>
                <input style={{width:'240px',height:'36px',paddingLeft:'10px'}}
                    type="search" placeholder="Find a member" onChange={(e)=>this.props.inputChangeHandler(e)}/>
            </div>
        )
    }
}