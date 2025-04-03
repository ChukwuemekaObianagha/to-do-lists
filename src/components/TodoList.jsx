import React, { useState } from 'react'


const TodoList = () => {

    const [Tasks, setTasks] = useState([])
    const [NewTask, setNewTask] = useState("")

    function handleInputChange(event){
        event.preventDefault();
        setNewTask(event.target.value);
    }

    function addTask(){

        if(NewTask.trim() !== ""){
            setTasks(t => [...Tasks, NewTask])
            setNewTask("")
        }    
    }


    function deleteTask(index){
        
        const updatedTasks = Tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }


    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...Tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    function moveTaskDown(index){
        
        if(index < Tasks.length - 1){
            const updatedTasks = [...Tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

  return (
    <div className='bg-yellow-500 min-h-screen font-serif text-center pt-10'>
        <h1 className='text-2xl'>To-Do-List</h1>

        <div className='my-7'>
            <input type="text" placeholder='Enter a task...' className='text-lg p-2.5 border-black border-1' value={NewTask} onChange={handleInputChange} />
            <button className='font-bold p-3 text-white rounded-r-lg cursor-pointer bg-green-700' onClick={addTask}>➕</button>
        </div>

        <ol className='p-0 flex flex-col items-center text-center mx-auto'>
            {Tasks.map((task, index)=> 
                <li className='text-lg font-bold p-5 bg-grey-200 mb-3 rounded-lg flex items-center justify-between space-x-5 border-2 border-black' key={index}>
                    <div>
                        <span>{task}</span>
                    </div>
                    <div>
                        <button className='text-xl font-bold p-2 text-white rounded-lg cursor-pointer bg-red-700' onClick={() => deleteTask(index)}>🗑️</button>
                        <button className='text-xl font-bold p-2 text-white rounded-lg cursor-pointer bg-blue-400' onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className='text-xl font-bold p-2 text-white rounded-lg cursor-pointer bg-blue-400' onClick={() => moveTaskDown(index)}>👇</button>
                    </div>
                </li>
            )}
        </ol>
    </div>
  )
}

export default TodoList;