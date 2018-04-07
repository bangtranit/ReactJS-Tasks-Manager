import React, { Component } from 'react';
class TaskSort extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen : false,
            sort : {
                by : 'name',
                value : 1
            }
        }
    }

    toggeDropDown = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    onClick = (sortby, sortvalue) => {
        this.props.onSort(sortby,sortvalue);
        this.setState({
            sort : {
                by : sortby,
                value : sortvalue
            }
        }); 
        this.toggeDropDown();
    }
	render(){
        var {sort} = this.state;
	    return(
			<div className= {this.state.isOpen ? "dropdown open" : "dropdown"}>
                <button 
                    className="btn btn-primary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenu1" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="true"
                    onClick={this.toggeDropDown}
                    >
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={ () => this.onClick('name', 1)}>
                        <a 
                            role="button"
                            className={(sort.by === 'name' && sort.value === 1) ? 'sort_selected' : ''}
                            >
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                            </span>
                        </a>
                    </li>
                    <li onClick={ () => this.onClick('name', -1)}>
                        <a 
                        role="button"
                        className={(sort.by === 'name' && sort.value === -1) ? 'sort_selected' : ''}>
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                            </span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={ () => this.onClick('status', 1)}>
                        <a 
                        role="button"
                        className={(sort.by === 'status' && sort.value === 1) ? 'sort_selected' : ''}>
                            <span className="">
                                Trạng thái kích hoạt
                            </span>
                        </a>
                    </li>

                    <li onClick={ () => this.onClick('status', -1)}>
                        <a 
                        role="button"
                        className={(sort.by === 'status' && sort.value === -1) ? 'sort_selected' : ''}>
                            <span className="">
                                Trạng thái ẩn
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
		);
	}
}
export default TaskSort;