import React, { useState } from "react";
function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }
    };
    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
    const taskDown = (index) => {
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            setTasks(newTasks);
        }   
    };
    const taskUp = (index) => {
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            setTasks(newTasks);
        }
    };
    const editTask = (index) => {        
        setInput(tasks[index]);
    };
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    return (
    <div className="todo-container">
        <h1 className="todo-title">To Do List</h1>
        <div className="todo-input-container">
            <input className="todo-input" type="text" value={input} onChange={handleInputChange} placeholder="Add a new task"/>
            <button className="todo-add-btn" onClick={addTask}>Add</button>
        </div>
        <ul className="todo-list">
            {tasks.map((task, index) => (
                <li key={index} className="todo-item">
                    <span className="todo-task">{task}</span>
                    <div className="todo-buttons">
                        <button className="todo-button remove-btn"onClick={() => removeTask(index)}>Remove</button>
                        <button className="todo-button up-btn"onClick={() => taskUp(index)}>Up</button>
                        <button className="todo-button down-btn"onClick={() => taskDown(index)}>Down</button>
                        <button className="todo-button edit-btn"onClick={() => editTask(index)}>Edit</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);  
}
export default ToDo;