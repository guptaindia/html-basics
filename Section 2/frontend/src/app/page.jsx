
import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 style={{ color : 'grey', textAlign: 'center', fontSize:70 }}>Welcome to Home Page</h1>
      
      <button className='my-btn'>MY Button</button>
      <button className='btn btn-primary'> button</button> 
      
      <hr />
      <img src="" alt="" />
      <input type="text" />
      <br />

      <Link href="/login">login</Link>
      <Link href="/signup">signup</Link>
      <Link href="/contact">contact</Link>
      <Link href="/about">about</Link>
    </div>
  )
}

export default Home;