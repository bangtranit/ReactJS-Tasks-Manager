import React, { Component } from 'react'
import Search from "./Search"
import Sort from "./Sort"
import * as actions from './../actions/index'
import { connect } from 'react-redux'

class Control extends Component{
	onClickAddNewTask = () =>{
		// this.props.onReciveCickAddNew();
		this.props.onOpenForm();
	}
	render(){
		return(
			<div>
				<button type="button" className="btn btn-primary" onClick = {this.onClickAddNewTask}>
					<span className="fa fa-plus mr-5"></span>Thêm Công Việc
				</button>
	            <div className="row mt-15">
	                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	                        <Search />
	                    </div>
	                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	                        <Sort 
	                        onSort={this.props.onSort}
	                        />
	                    </div>
	            </div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return{

	}
}

const mapDispatchToProps = (dispatch, props) => {
	return{
		onOpenForm : () => {
			dispatch(actions.openForm());
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);