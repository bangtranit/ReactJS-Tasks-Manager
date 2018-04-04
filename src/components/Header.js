import React, { Component } from 'react';
import "./Component.css";
class Header extends Component{
	render(){
		return(
			<div>
				<h2 className="header-label">Jobs</h2>
				<hr/>
			</div>
		);
	}
}
export default Header;