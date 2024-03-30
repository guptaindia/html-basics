'use client';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';

const UploadPost = () => {

    const postForm = useFormik({
        initialValues: {
            title: '',
            image : '',
            username : '',
            postedOn : new Date()
        },
        onSubmit: (values) => {
            console.log(values);

            fetch('http://localhost:5000/post/add', {
                method: 'POST',
                body : JSON.stringify(values),
                headers : {
                    'Content-Type' : 'application/json'
                }

            })
            .then((res) => {
                if(res.status === 200){
                    toast.success('post uploaded successfully');
                }else {
                    toast.error('error in uploading post')
                }
            }).catch((err) => {
                console.log(err);
                toast.error('error in uploading post')
            });
        }
    })

  return (
    <div>
        <div className="container">

            <h1 className="text-center my-4">Upload Post</h1>
            <hr />
            <div className="card">
                <div className="card-body">

                    <form onSubmit={ postForm.handleSubmit }>

                        <div className="mb-3">
                            <label for="title" className="form-label">Title</label>
                            <input
                                type="text"
                                id="title"
                                onChange={postForm.handleChange}
                                value={postForm.values.title}
                                className="form-control"
                                placeholder=""
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="mb-3">
                            <label for="image" className="form-label">Image</label>
                            <input
                                type="text"
                                id="image"
                                onChange={postForm.handleChange}
                                value={postForm.values.image}
                                className="form-control"
                                placeholder=""
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input
                                type="text"
                                id="username"
                                onChange={postForm.handleChange}
                                value={postForm.values.username}
                                className="form-control"
                                placeholder=""
                                aria-describedby="helpId"
                            />

                        </div>

                        <button type="submit" className="btn btn-primary mt-5">Upload</button>
                        

                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default UploadPost;