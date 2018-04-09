import React, { Component } from 'react'
import "./Component.css"
import { connect } from 'react-redux'
import * as actions from './../actions/index';

class TaskForm extends Component{
	constructor(props){
		super(props);
		this.state={
            id : "",
			name : "",
			status : false
		}
	}

    componentWillMount(){
        var {task} = this.props;
        if (task) {
            this.setState({
                id : task.id,
                name : task.name,
                status : task.status
            });
        }else{
            this.resetState();
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.task) {
            this.setState({
                id : nextProps.task.id,
                name : nextProps.task.name,
                status : nextProps.task.status
            });
        }else{
            this.resetState();
        }
    }

    resetState(){
        this.setState({
            id : "",
            name : "",
            status : false
        });
    }

	onCloseForm = () => {
		this.props.onCloseForm();
	}

	onChange = (event) =>{
		var target = event.target;
		var name = target.name;
		var value = target.value;
		if (name === "status") {
			value = target.value === "true" ? true : false;
		}
		this.setState({
			[name] : value
		});
	}

	onSubmit = (event) =>{
        var {name} = this.state;
        if (name === "") {
            alert("Chủ thớt không cho bạn tạo bug đâu ahihi!");
            event.preventDefault();
        }else{
            event.preventDefault();
            this.props.onSaveTask(this.state);
            this.onClear();
            this.onCloseForm();
        }
	}

	onClear = () =>{
		this.setState({
            id : "",
			name : "",
			status : false
		});
	}

    onSetTitle = () => {
        var name = this.state;
        var title = name === "" ?  "Thêm công việc" :  "Thay đổi"
        return title;
    }

	render(){
        var {id} = this.state;

        if (!this.props.isDisplayForm) return null;

		return(
			<div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title"> { id !== "" ? "Thay đổi" : "Thêm công việc"}
                    	<span className="fa fa-times-circle pull-right" onClick={this.onCloseForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit = {this.onSubmit} >
                        <div className="form-group">
                            <label>Tên:</label>
                            <input 
                            	type="text" 
                            	className="form-control" 
                            	name="name"
                            	value= {this.state.name}
                            	onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái:</label>
                        <select 
                        	className="form-control"
                        	name="status"
                        	value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value = {true} >Kích Hoạt</option>
                            <option value = {false} >Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button 
                            	type = "submit" 
                            	className = {id === '' ? 'btn btn-primary' : 'btn btn-success'}
                            	>{id === '' ? 'Thêm' : 'Lưu Lại'}
                                </button>&nbsp;
                            <button 
                            	type = "button" 
                            	className = "btn btn-danger"
                            	onClick = {this.onClear}
                            	>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm,
        task : state.editTask
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask : (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);




