import React, {Component} from 'react';

// Using a class component here because this comp will hold state, and we are not yet using hooks
class InputTodo extends Component {
	state = {
		title: ""
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.title !== "") {
			this.props.addTodoProps(this.state.title);
		}
		this.setState({
			title: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form-container">
				<input
					type="text"
					placeholder="Add Todo..."
					name="title"
					className="input-todo"
					value={this.state.title}
					onChange={this.onChange}
				/>
				{" "}
				<input type="submit" value="submit" className="input-submit"/>
			</form>
		);
	}
}

export default InputTodo;
