import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class UserListComponent extends Component{

    render(){
        let userList = this.getUserList()
        return(
            <div style={{width:'100%'}}>
                {userList}
            </div>
        )
    }

    getUserList(props=this.props){
        let userList = props.userList
        if(!userList || !userList.size)
            return []
        return <div>
            <ul>
                {userList.map(function (user) {
                    let avatar_url = user.get('avatar_url')
                    let login = user.get('login')
                    return <li>
                        <div style={{display:'flex' , borderBottom : '1px solid grey'}}>
                            <div style={{width:'58px',height:'58px'}}>
                                <img style={{width:'48px',height:'48px'}} src={avatar_url}/>
                            </div>
                            <div style={{marginLeft:'20px',display:'flex',justifyContent:'center'}}>
                                <Link to={"/user/"+login}>{login}</Link>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    }
}