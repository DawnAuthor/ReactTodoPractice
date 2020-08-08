import React from 'react';

const TodoItem = (props) => {
	//Destructure out individual fields here from props.todo, to keep from retyping it over and over (i.e. props.todo.id)
	const {id, completed, title} = props.todo;
	const completedStyle = {
		fontStyle: 'italic',
		color: '#d35e0f',
		opacity: 0.4,
		textDecoration: 'line-through'
	};
	return (
		<li className="todo-item">
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={() => props.handleChangeProps(id)}
				/>
			</label>
			{" "}
			<button onClick={() => props.deleteTodoProps(id)}>Delete</button>
			<span style={completed ? completedStyle: null}>
				{title}
			</span>
		</li>
	);
}
export default TodoItem;
