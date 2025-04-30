import React, {useState} from 'react';
import './todo-style.css';

function ToDoList(){
    const [tasks, setTasks] = useState(["Enter your tasks above!", "Good Luck with your tasks!", "You are doing great!"]);
    const [newTask, setNewTask] = useState('');


    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){ // Prevent adding empty tasks 
        setTasks(t=> [...t, newTask]); 
        setNewTask(''); // Clear the input field after adding the task
        }
    }

    function deleteTask(taskIndex){
        const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
        
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
        
    }

    return(
        <div className = "to-do-list">
            <h1>To Do List</h1>

            <div>
                <input type="text" placeholder='Enter a task...'  value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                  <li key={index}>
                    <span className="task">{task}</span>
                    <div className="button-group">
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>⬆️</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>⬇️</button>
                    </div>
                  </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;