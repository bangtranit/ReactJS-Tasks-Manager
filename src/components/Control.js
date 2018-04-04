import React, { Component } from 'react';
import Search from "./Search";
import Sort from "./Sort";
class Control extends Component{
	onClickAddNewTask = () =>{
		this.props.onReciveCickAddNew();
		console.log("aaaa");
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
export default Control;