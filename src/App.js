import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control"
import TaskList from "./components/TaskList"

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks : [], //id: unique, name, status
            isDisplayForm : false,
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

    componentWillMount(){
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasks
            });
        }
    }

    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + this.s4() + "_" + this.s4() + "_" + this.s4() + "_" + this.s4() + "_" + 
        this.s4() + "_" + this.s4() + "_" + this.s4() + "_" + this.s4();
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

    onSubmit = (data) => {
        var { tasks } = this.state;
        if (data.id === "") {
            data.id = this.generateID();
            tasks.push(data);
            
        }else{
            var index = this.findById(data.id);
            if (index !== -1) {
                tasks[index] = data;
            }
        }
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
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
        var {tasks, isDisplayForm, taskEditing, filter, keyword, sort} = this.state;
        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task) =>{
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            tasks = tasks.filter((task) =>{
                if (filter.status === -1) {
                    return task;
                }else{
                    return task.status === (filter.status === 1 ? true : false);
                }
            });
        }
        if (keyword) {
            tasks = tasks.filter((task) =>{
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }
        if (sort) {
            if (sort.y === 'name') {
                            console.log("aaaaaaa", tasks);

                tasks.sort((a,b) => {
                    if (a.name > b.name) return sort.value;
                    else if (a.name < b.name) return -sort.value;
                    else return 0;
                }); 
            }else{
                tasks.sort((a,b)=>{
                    if (a.status > b.status) return -sort.value;
                    else if (a.status < b.status) return sort.value;
                    else return 0;
                });
            }
        }
        var elementTaskForm = isDisplayForm ? <TaskForm 
                                               onCloseForm={this.onCloseForm}
                                               onSubmit={this.onSubmit} 
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
                            onUpdateStatus={this.onUpdateStatus}
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
export default App;
