import React, { Component } from "react";
import { useState } from "react";

import './add-panel.css'

const AddPanel = (props) => {

	const [addItem, setState] = useState('')

	const onAdd = (event) => {
		setState(event.target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		props.onItemAdded(addItem)
		setState('')
	}


	return(
		<form className="add-panel d-flex"
			onSubmit = {onSubmit}>
			<input
				onChange={onAdd}
				className="form-control"
				type="text" 
				placeholder = "add new task"
				value = {addItem}>
				</input>
			<button
				type="submit" 
				className="btn btn-outline-primary">
				Add
			</button>
		</form>
	)
	
}

export default AddPanel
// export default class AddPanel extends Component {

// 	state = {
// 		addItem: ''
// 	}

// 	onAdd = (event) => {
// 		this.setState({
// 			addItem: event.target.value
// 		})
// 	}

// 	onSubmit = (event) => {
// 		event.preventDefault()
// 		this.props.onItemAdded(this.state.addItem)
// 		this.setState({
// 			addItem: ''
// 		})
// 	}

// 	render() {

// 		return(
// 			<form className="add-panel d-flex"
// 				onSubmit = {this.onSubmit}>
// 				<input
// 					onChange={this.onAdd}
// 					className="form-control"
// 					type="text" 
// 					placeholder = "add new task"
// 					value = {this.state.addItem}>
// 				 </input>
// 				<button
// 				 type="submit" 
// 				 className="btn btn-outline-primary">
// 					Add
// 				</button>
// 			</form>
// 		)
// 	}
// }


