import React, { Component } from "react";
import AddPanel from "../add-panel";
import Header from "../header";
import SerachPanel from "../search-panel";
import TodoList from "../todo-list";
import { useState } from "react";

import './app.css'

const App = () => {
    const todoData = [
        createTodoItem('Drink Coffe'),
        createTodoItem('Create React App'),
        createTodoItem('Make awesome App')    
    ]

    const [changedTodoData, setTodoData] = useState(todoData)
    const [filter, setFilter] = useState('ALL')
    const [term, setTerm] = useState('')

    function createTodoItem(label) {
        return {
            id: label,
            label,
            important: false,
            done: false
        }
    }
    
     const deletItem = (id) => {
        
        const idx = changedTodoData.findIndex((el) => el.id === id)
        const newTodoData = [...changedTodoData.slice(0, idx), ...changedTodoData.slice(idx + 1)]
        setTodoData(newTodoData)
       
    }

    const addItem = (text) => {
        if(text.length === 0){
            return changedTodoData
        }
        const newItem = createTodoItem(text)
        setTodoData([...changedTodoData, newItem])
    }

    const toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        const newArray = [
            ...arr.slice(0,idx),
             newItem,
            ...arr.slice(idx+1)
        ]
        return newArray
    }

    const onToggleImportant = (id) => {
        setTodoData(toggleProperty(changedTodoData, id, 'important'))
    }

    const onToggleDone = (id) => {
        setTodoData(toggleProperty(changedTodoData, id, 'done'))
    }

    const searchFilter = (items, filter) => {
        switch(filter){
            case 'ALL':
                return items
            case 'DONE':
                return items.filter((el) => el.done === true)
            case 'ACTIVE':
                return items.filter((el) => el.done === false)
            default:
                return items
                
        }
    }

    const search = (items, term) => {
        if(term.length === 0) {
            return items
        } 
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        }) 
    }
    
    const onChangeFilter = (text) => {
        setFilter(text)
    }

    const onChangeTerm = (event) => {
        setTerm(event.target.value)
    }

    
    const doneCount = changedTodoData.filter((el) => el.done === true).length
    const todoCount = changedTodoData.length - doneCount
    const visibleItems = searchFilter(search(changedTodoData,term), filter)
    return(
        <div className="todo-app">
            <Header todo = {todoCount} done = {doneCount} />

            <SerachPanel activeButton ={filter}
                filter = {onChangeFilter}
                onChangeTerm = {onChangeTerm}/>

            <TodoList 
                onDeleted = {deletItem}
                todos = {visibleItems}
                onToggleDone = {onToggleDone}
                onToggleImportant = {onToggleImportant}/>

            <AddPanel onItemAdded = {addItem} />
        </div>
    )

    
}

export default App

// export default class App extends Component {
//     maxId = 100;
//     state ={
//         todoData: [
//             this.createTodoItem('Drink Coffe'),
//             this.createTodoItem('Create React App'),
//             this.createTodoItem('Make awesome App')    
//         ],
//         term: '',
//         filter: 'ALL'
//     } 

//     createTodoItem(label) {
//         return {
//             id: this.maxId++,
//             label,
//             important: false,
//             done: false
//         }
//     }
    
//     deletItem = (id) => {
//         this.setState(({todoData}) => {
//             const idx = todoData.findIndex((el) => el.id === id)
//             const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
//             return {
//                 todoData: newTodoData
//             }
//         })
//     }

//     addItem = (text) => {
//         const newItem = this.createTodoItem(text)
//         this.setState(({todoData}) => {
//             const newTodoData = [...todoData, newItem]
//             return{
//                 todoData: newTodoData
//             }
//         })
//     }

//     toggleProperty = (arr, id, propName) => {
//         const idx = arr.findIndex((el) => el.id === id)
//         const oldItem = arr[idx]
//         const newItem = {...oldItem, [propName]: !oldItem[propName]}
//         const newArray = [
//             ...arr.slice(0,idx),
//              newItem,
//             ...arr.slice(idx+1)
//         ]
//         return newArray
//     }

//     onToggleImportant = (id) => {
//         this.setState(({todoData}) => {
//             return {
//                 todoData: this.toggleProperty(todoData, id, 'important')
//             }
//         })
//     }

//     onToggleDone = (id) => {
//         this.setState(({todoData}) => {
//             return {
//                 todoData: this.toggleProperty(todoData, id, 'done')
//             }
//         })
//     }

//     filter = (items, filter) => {
//         switch(filter){
//             case 'ALL':
//                 return items
//             case 'DONE':
//                 return items.filter((el) => el.done === true)
//             case 'ACTIVE':
//                 return items.filter((el) => el.done === false)
//             default:
//                 return items
                
//         }
//     }

//     search = (items, term) => {
//         if(term.length === 0) {
//             return items
//         } 
//         return items.filter((item) => {
//             return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
//         }) 
//     }
    

//     onChangeFilter = (text) => {
//         this.setState({
//             filter: text
//         })
//     }

//     onChangeTerm = (event) => {
//         this.setState({
//             term: event.target.value
//         })
//     }

//     render() {
//         const {todoData, filter, term} = this.state
//         const doneCount = todoData.filter((el) => el.done === true).length
//         const todoCount = todoData.length - doneCount
//         const visibleItems = this.filter(this.search(todoData,term), filter)
//         return(
//             <div className="todo-app">
//                 <Header todo = {todoCount} done = {doneCount} />

//                 <SerachPanel activeButton ={filter}
//                  filter = {this.onChangeFilter}
//                  onChangeTerm = {this.onChangeTerm}/>

//                 <TodoList 
//                   onDeleted = {this.deletItem}
//                   todos = {visibleItems}
//                   onToggleDone = {this.onToggleDone}
//                   onToggleImportant = {this.onToggleImportant}/>

//                 <AddPanel onItemAdded = {this.addItem} />
//             </div>
//         )
//     }
    
// }
