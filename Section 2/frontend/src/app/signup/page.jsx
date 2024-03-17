import React from 'react'

const Signup = () => {
  return (
    <div className='container-fluid row align-items-center vh-100'>
      <div className='header'>
        <div className='text'>signup</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src="" alt="" />
          <input type="text" />
        </div>
        <div className='input'>
          <img src="" alt="" />
          <input type="email" />
        </div>
        <div className='input'>
          <img src="" alt="" />
          <input type="password" />
        </div>
      </div>
      <div className="forget-password">lost password? <span>click here!</span></div>
      <div className="submit-container">
        <div className="submit">signup</div>
        <div className='submit'>login</div>
      </div>
    </div>
  )
}

export default Signup;
