import React,{Component} from 'react'

export default class ProfilePage extends Component{

    render(){
        return(
            <div>
                {this.showProfilePage()}
            </div>
        )
    }

    showProfilePage(props=this.props){
        let {details} = props
        if(!details || !details.size)
            return null
        let ownerInfo = details.getIn(['0','owner'])
        let userName = ownerInfo.get('login')
        let avatar_url = ownerInfo.get('avatar_url')
        let self = this
        return <div style={{width:'100%'}}>
            <div style={{float:'left',width:'24%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <img src={avatar_url} style={{width:'230px',height:'230px',borderRadius:'3px'}}/>
                <span>{userName}</span>
            </div>
            <div style={{float:'left',width:'76%'}}>
                <div>
                    <select onChange={(e)=>self.props.onChangeHandler(e)}>
                        <option value="created">created</option>
                        <option value="updated">updated</option>
                        <option value="pushed">pushed</option>
                        <option value="full_name">full_name</option>
                    </select>
                </div>
                {this.getRepoList()}
            </div>
        </div>
    }

    getRepoList(){
        let {details} = this.props
        return <div>
            <ul>
                {details.map(function (repo) {
                    let name = repo.get('name')
                    let git_url = repo.get('git_url')
                    return <li>
                        <a href={git_url}>{name}</a>
                    </li>
                })}
            </ul>
        </div>
    }
}