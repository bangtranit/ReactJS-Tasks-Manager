import React, { Component } from 'react';

class TaskItem extends Component{

    onUpdateStatus = () =>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onRemoveTask = () =>{
        this.props.onRemoveTask(this.props.task.id);
    }

    onUpdate = () =>{
        this.props.onOpenEditForm(this.props.task.id);
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
export default TaskItem;