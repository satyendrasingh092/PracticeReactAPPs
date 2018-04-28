import React,{Component} from 'react'

export default class PaginationComponent extends Component{
    render(){
        return(<ul className="pagination">
                <li><a onClick={(e) => this.props.paginationClickHandler(e)}>&laquo;</a></li>
                <li><a onClick={(e) => this.props.paginationClickHandler(e)}>1</a></li>
                <li><a onClick={(e) => this.props.paginationClickHandler(e)}>2</a></li>
                <li><a onClick={(e) => this.props.paginationClickHandler(e)}>3</a></li>
                <li><a onClick={(e) => this.props.paginationClickHandler(e)}>4</a></li>
                <li><a onClick={(e) => this.props.paginationClickHandler(e)}>5</a></li>
                <li><a onClick={(e) => this.props.paginationClickHandler(e)}>&raquo;</a></li>
            </ul>)

    }
}