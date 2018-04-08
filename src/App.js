import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl"
import TaskList from "./components/TaskList"
import { connect } from 'react-redux'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword : '',
            sort : {
                by : 'name',
                value : '1'
            }
        }
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
        var isDisplayForm = this.props.isDisplayForm;
        var elementTaskForm = isDisplayForm ? <TaskForm /> : "";
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
                        <TaskControl 
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                        />
                        <TaskList />
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
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
