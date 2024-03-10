'use client'
import React from 'react'

const EventHandling = () => {
    const num=352;
    const num2 = 554;
    const getProd = (a,b) => {
        return a*b;
    }

  return (
    <div>
        <div className='container py-5'>
            <h1 className='text-center'>EventHandling</h1>
            <hr />
            <button className='btn btn-primary' onClick={()=>{alert('button was clicked')}}>clickme</button>
            <input type="text" className='form-control' 
            onChange={ (event) => {console.log(event.target.value)}}
            />
            <input type='color' onChange={(e) => {document.body.style.background = e.target.value}} />
            <h1>{num}</h1>
            <h3>{num + num2}</h3>
            <p>{getProd(2,8)}</p>

        </div>
    </div>
  )
}

export default EventHandling;