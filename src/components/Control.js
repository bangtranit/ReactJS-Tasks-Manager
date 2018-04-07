import React, { Component } from 'react'
import Search from "./Search"
import Sort from "./Sort"
import * as actions from './../actions/index'
import { connect } from 'react-redux'

class Control extends Component{
	onSubmit = () =>{
		var editTask = this.props;
		if (editTask && editTask.id !== '') {
			this.props.onOpenForm();
		}else{
			this.props.onToggleForm();
		}
		this.props.onClearTask({
			id : '',
			name : '',
			status : false
		})
	}
	render(){
		return(
			<div>
				<button type="button" className="btn btn-primary" onClick = {this.onSubmit}>
					<span className="fa fa-plus mr-5"></span>Thêm Công Việc
				</button>
	            <div className="row mt-15">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Search />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Sort onSort={this.props.onSort}/>
                    </div>
	            </div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return{
		editTask : state.editTask
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return{
		onToggleForm : () =>{
			dispatch(actions.toggleForm());
		},
		onOpenForm : () => {
			dispatch(actions.openForm());
		},
		onClearTask : (task) => {
            dispatch(actions.editTask(task));
        }

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);