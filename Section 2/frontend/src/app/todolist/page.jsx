'use client'
import React, { useState } from 'react'

const TodoList = () => {
//usestate returns only 2 values fisrt function will read , 2nd funtion will update
    const [taskArray, settaskArray] = useState([]);

    const addnewtask = (e) => {
        //console.log(e.code);
        if(e.code === 'Enter'){
            console.log(e.target.value);
            const obj = {text: e.target.value, completed: false};
            settaskArray([obj, ...taskArray]) //... spread operator
            e.target.value='';

        }
    }
    const deleteTask = (index) => {
        //console.log(index);
        const temp = taskArray;
        temp.splice(index, 1);
        settaskArray([...temp])
    }
    const completeTask = (index) => {
        const temp = taskArray;
        temp[index].completed =  !temp[index].completed;
        settaskArray([...temp])
    }

    return (
        <div className='vh-100 bg-primary-subtle'>
            <div className='container py-3'>
                <h1 className='display-2 text-center my-3'>ToDo-List-{taskArray.length}</h1>
                <div className='card shadow'>
                    <div className='card-header'>
                    <input onKeyDown={addnewtask} type='text' className='form-control border-3 border-primary' />
                    </div>
                    <div className='card-body '>
                    {
                        taskArray.map((task, index) => {return <div  className='d-flex justify-content-between align-items-center p-3' key={index}>
                        <p className='m-0 h5 w-50'>{task.text}</p>
                        {
                            task.completed ? 
                            <span className='badge text-bg-success'>completed</span>:
                            <span className='badge text-bg-warning'>pending</span>
                        }
                        <button onClick={ () => {completeTask(index)} } className={`btn btn-${task.completed ? 'success' : 'primary'}`}>{
                            task.completed ? 
                            'Uncomplete': 'Completed'
                        }</button>
                        <button onClick={ ()  => {deleteTask(index)}} className='btn btn-danger'>Delete</button>
                        </div> } )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;