import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import {v4 as uuidv4} from 'uuid';

class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: 'Setup dev env',
				completed: true
			},
			{
				id: uuidv4(),
				title: 'dev website and add content',
				completed: false
			},
			{
				id: uuidv4(),
				title: 'deploy to live server',
				completed: false
			},
		]
	};

	handleChange = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if(todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	}

	deleteTodo = (id) => {
		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id;
				})
			]
		});
	}

	addTodoItem = title => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false
		};
		console.log(newTodo);
		console.log(this.state.todos);
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	}

	render() {
		return (
			<div className="container">
				<Header />
				<InputTodo addTodoProps={this.addTodoItem} />
				<TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.deleteTodo} />
			</div>
		);
	}
}
export default TodoContainer;
