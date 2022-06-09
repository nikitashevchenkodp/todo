import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
	const elems = todos.map((item) => {
		const {id,...itemProps} = item
		return (
		<li className="list-group-item"
		 key = {id}>
			 <TodoListItem 
			 onDeleted ={() => onDeleted(id)}
			 onToggleImportant = {() => onToggleImportant(id)} 
			 onToggleDone = {() => onToggleDone(id)}
			 {...itemProps} />
		</li>)
	})
	return (
		<ul className="list-group">
			{elems}
		</ul>
	)
}

export default TodoList