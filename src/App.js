import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control"
import TaskList from "./components/TaskList"
import * as actions from './actions/index';
import { connect } from 'react-redux'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            taskEditing : null,
            filter :{
                name : '',
                status: -1
            },
            keyword : '',
            sort : {
                by : 'name',
                value : '1'
            }
        }
    }

    onReciveCickAddNew = (params) =>{
        this.onOpenForm();
        this.setState({
            taskEditing : null
        });
    }

    onOpenForm = () =>{
        this.setState({
            isDisplayForm : true
        });
    }

    onCloseForm = () =>{
        this.setState({
            isDisplayForm : false,
            taskEditing : null

        });
    }

    onUpdateStatus = (id) =>{
        var {tasks} = this.state;
        var index = this.findById(id);
        if (index !==   -1) {
            tasks[index].status = !tasks[index].status;
        }
        this.setState({
            tasks:tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    onRemoveTask = (id) =>{
        var {tasks} = this.state;
        var index = this.findById(id);
        if (index !== -1) {
            tasks.splice(index,1);
                this.setState({
                tasks:tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    onOpenEditForm = (id) =>{
        var {tasks} = this.state;
        var index = this.findById(id);
        if (index !== -1) {
            var taskEdit = tasks[index];
            this.setState({
                taskEditing : taskEdit,
            });
            this.onOpenForm();
        }
    }

    onFilter = (filterName, filterStatus) =>{
        if (filterStatus === "") {
            filterStatus = "-1";
        }
        this.setState({
            filter:{
                name: filterName.toLowerCase(),
                status: parseInt(filterStatus, 10)
            }
        });
    }

    onSearch = (keyword) =>{
        this.setState({
            keyword : keyword.toLowerCase()
        });
    }

    onSort = (sortBy, sortValue) =>{
        this.setState({
            sort : {
                by : sortBy,
                value : sortValue
            }
        });
    }

    findById(id){
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task,index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        var { 
            taskEditing, 
          } = this.state;

        var isDisplayForm = this.props.isDisplayForm;
        var elementTaskForm = isDisplayForm ? <TaskForm 
                                               task={taskEditing}/> : "";
        return (
            <div className="container mt-20">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {elementTaskForm}
                    </div>
                    <div 
                    className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <Control 
                            onReciveCickAddNew={this.onReciveCickAddNew}
                            onSearch={this.onSearch}
                            onSort={this.onSort}/>

                        <TaskList 
                            onRemoveTask={this.onRemoveTask}
                            onOpenEditForm={this.onOpenEditForm}
                            onFilter={this.onFilter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        onToggleForm : () => {
            dispatch(actions.toggleForm);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
