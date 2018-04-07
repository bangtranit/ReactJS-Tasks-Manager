import React, { Component } from 'react'
import * as actions from './../actions/index'
import { connect } from 'react-redux'

class TaskItem extends Component{

    onUpdateStatus = () =>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onRemoveTask = () =>{
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () =>{
        // this.props.onUpdateStatus(this.props.task.id);
        this.props.onEditTask(this.props.task);
        this.props.onOpenForm();
    }

	render(){
        var {task, index} = this.props;
		return(
	        <tr>
                <td className="text-center">{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status === true? "label label-success" : "label label-warning"}
                        onClick={this.onUpdateStatus}
                        >
                                { task.status === true? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={this.onUpdate}
                        >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.onRemoveTask}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
		);
	}
}

const mapStateToProps = state => {
    return{};
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onUpdateStatus : id => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask : id =>{
            dispatch(actions.deleteTask(id));
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        },
        onEditTask : task =>{
            dispatch(actions.editTask(task));
        },
        onOpenForm : () =>{
            dispatch(actions.openForm());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);


