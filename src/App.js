import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl"
import TaskList from "./components/TaskList"
import { connect } from 'react-redux'

class App extends Component {
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
                        <TaskControl />
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
