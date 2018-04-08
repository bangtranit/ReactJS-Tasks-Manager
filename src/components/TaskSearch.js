import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'

class TaskSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            keyword :''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSearch = () =>{
        // this.props.onSearch(this.state.keyword);
        this.props.onSearch(this.state.keyword);
    }
	render(){
		return(
			<div className="input-group">
                <input 
                    type="text" 
                    name="keyword"
                    className="form-control" 
                    placeholder="Nhập từ khóa..." 
                    onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-primary" 
                            type="button"
                            onClick={this.onSearch}
                            >
                         	<span className="fa fa-search mr-5"></span>Tìm
                        </button>
                    </span>
            </div>
		);
	}
}


const mapStateToProps = state =>{
    return {};
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onSearch : (keyword) =>{
            dispatch(actions.searchTask(keyword));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSearch);







