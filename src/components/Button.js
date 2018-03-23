import React, { Component } from 'react';

class Button extends Component {
	render() {
		return(
			<button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>	
		)
	}
}
export default Button;