import React, { Component } from "react";

import './todo-list-item.css'
const TodoListItem = (props) => {


    const {label, onDeleted, onToggleImportant, onToggleDone, important,done} = props

    let className ="todo-list-item "
    if(done) {
            className+= "done"
    }
    if(important) {
        className+="important"
    }

    return(
        <span className={className}>
            <span
                className="todo-list-item-label"
                onClick= {onToggleDone}>{label}
            </span>

            <button className="btn btn-outline-danger btn-sm float-end"
                    onClick={onDeleted} >
                <i className="fa-solid fa-trash-can"></i>
            </button>

            <button 
            onClick={onToggleImportant}
            className="btn btn-outline-success btn-sm float-end">
                <i className="fa-solid fa-exclamation"></i>
            </button>
        </span>
    )
    
}

export default TodoListItem