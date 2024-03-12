'use client'
import React, { useState } from 'react'
// how to add font style in comments text
const Comments = () => {
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
  function handleDelete(task){
    //console.log("delete clicked for", task);
    settaskArray(taskArray.filter((todo) => todo !== task));
  }
  // let like;
  // function handleLike(task, like){
  //   console.log("like clicked for comment", task);
  //   if(like == 0){
  //     console.log('0like');
  //     like=1;
  //   }
  //   else{
  //     console.log('1like');
  //     like=0;
  //   }
  // }


  return (
    <div className='vh-100 bg-secondary'>
        <div className='container py-3'>
            <h1 style={{ color : 'white', textAlign: 'center', fontSize:30 }}>Comments</h1>
            <div className='card shadow p-4'>
               <div className='card-header'>Enter comments {taskArray.length}
              <input onKeyDown={addnewtask} type="text" maxLength='60' className='form-control border-3 border-secondary' />
               </div>
              <div className='card-body' >
              {
                        taskArray.map((task, index) => {return <div  className=' justify-content-between p-3' key={index}>
                        <p className='m-0 h5'>{task.text}</p>
                        {/* <button onClick={() => handleLike(task, like)} className='btn btn-primary'>like{like}</button> */}
                        <button onClick={() => handleDelete(task)} className='btn btn-secondary mx-4'>delete</button>
                        </div> } )
                    }
             </div>

            </div>

        </div >
     </div>
  )
}

export default Comments;