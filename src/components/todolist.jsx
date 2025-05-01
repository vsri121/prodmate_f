import React, { useState } from 'react';
import '../App.css'; // Using your existing CSS file

function ToDoList() {
    const [tasks, setTasks] = useState([
        { text: "Enter your tasks above!", completed: false },
        { text: "Good Luck with your tasks!", completed: false },
        { text: "You are doing great!", completed: false }
    ]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { text: newTask, completed: false }]);
            setNewTask('');
        }
    }

    function deleteTask(taskIndex) {
        const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
        setTasks(updatedTasks);
    }

    function toggleComplete(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div className="todo-container">
            <h3>To Do List</h3>

            <div className="todo-input-container">
                <input 
                    type="text" 
                    placeholder='Enter a task...' 
                    value={newTask} 
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>

            <ul className="todo-list">
                {tasks.length === 0 ? (
                    <div className="todo-empty">No tasks yet. Add one above!</div>
                ) : (
                    tasks.map((task, index) => (
                        <li 
                            key={index} 
                            className={`todo-item ${task.completed ? 'completed' : ''}`}
                        >
                            <div className="checkbox-container">
                                <input 
                                    type="checkbox" 
                                    checked={task.completed} 
                                    onChange={() => toggleComplete(index)}
                                />
                                <span className="checkbox-custom"></span>
                            </div>
                            <span className="task-text">{task.text}</span>
                            <div className="button-group">
                                <button 
                                    className="move-button" 
                                    onClick={() => moveTaskUp(index)}
                                    aria-label="Move up"
                                >↑</button>
                                <button 
                                    className="move-button" 
                                    onClick={() => moveTaskDown(index)}
                                    aria-label="Move down"
                                >↓</button>
                                <button 
                                    className="delete-btn" 
                                    onClick={() => deleteTask(index)}
                                    aria-label="Delete"
                                >✕</button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default ToDoList;