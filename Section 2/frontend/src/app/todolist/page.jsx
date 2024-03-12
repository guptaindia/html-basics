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
                        taskArray.map((task, index) => {return <div  className='d-flex justify-content-between p-3' key={index}>
                        <p className='m-0 h5'>{task.text}</p>
                        <button className='btn btn-danger'>Delete</button>
                        </div> } )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;