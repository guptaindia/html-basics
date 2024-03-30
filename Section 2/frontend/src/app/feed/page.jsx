'use client';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { date } from 'yup';

const feed = () => {
    const [postList, setpostList] = useState([]);

    const readPostData = () =>{
        fetch('http://localhost:5000/post/getall')
        .then((res) => {
            console.log(res.status);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setpostList(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
      readPostData();
    }, [])
    
    const deletePost = (id) => {
        fetch('http://localhost:5000/post/delete/'+id,{
            method: 'DELETE'
        })
        .then((res) => {
            if(res.status === 200){
                toast.success('post deleted successfully')
                readPostData();
            }
            else{
                toast.error('error in deleting post');
            }
            
        }).catch((err) => {
            console.log(err);
            toast.error('error in deleting post')
        });
    }
 
    return (
    <div>
        <div className='col-md-4 mx-auto py-5'>
            <h2 className='text-center'>post feed</h2>
        <hr/>

        {
            postList.map((post) => {
                return <div key={post._id} className='card mb-4'>
                    <div className='card-header'>
                        <h5>posted By : {post.username}</h5>
                        <button className='btn btn-danger' onClick={() => {deletePost(post._id)}}>delete</button>
                    </div>
                <img className='card-img-fluid' src={post.image} alt="" />
                <div className='card-body'>
                    <h5>{post.title}</h5>
                    <p>{new Date(post.postedOn).toLocaleDateString()}</p>
                    <button className='btn btn-primary mr-1'>{post.likes} Like</button>
                    <button className='btn btn-primary mr-1'>{post.shares} shares</button>
                </div>
                </div>
            })

        }
        </div>
    </div>
  )
}

export default feed