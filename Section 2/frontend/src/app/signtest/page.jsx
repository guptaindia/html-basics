'use client';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';

const signtest = () => {

    const postForm = useFormik({
        initialValues: {
            mail: '',
            name: '',
            password : '',
            postedOn : new Date()
        },
        onSubmit: (values) => {
            console.log(values);

            fetch('http://localhost:5000/user/data', {
                method: 'POST',
                body : JSON.stringify(values),
                headers : {
                    'Content-Type' : 'application/json'
                }

            })
            .then((res) => {
                if(res.status === 200){
                    toast.success('signed successfully');
                }else {
                    toast.error('error in signing')
                }
            }).catch((err) => {
                console.log(err);
                toast.error('error in signing')
            });
        }
    })

  return (
    <div>
        <div className="container">

            <h1 className="text-center my-4">SignIn</h1>
            <hr />
            <div className="card">
                <div className="card-body">

                    <form onSubmit={ postForm.handleSubmit }>

                        <div className="mb-3">
                            <label for="title" className="form-label">Email</label>
                            <input
                                type="text"
                                id="mail"
                                onChange={postForm.handleChange}
                                value={postForm.values.mail}
                                className="form-control"
                                placeholder=""
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="mb-3">
                            <label for="image" className="form-label">name</label>
                            <input
                                type="text"
                                id="name"
                                onChange={postForm.handleChange}
                                value={postForm.values.name}
                                className="form-control"
                                placeholder=""
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="mb-3">
                            <label for="username" className="form-label">password</label>
                            <input
                                type="text"
                                id="password"
                                onChange={postForm.handleChange}
                                value={postForm.values.password}
                                className="form-control"
                                placeholder=""
                                aria-describedby="helpId"
                            />

                        </div>

                        <button type="submit" className="btn btn-primary mt-5">Sign in</button>
                        

                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default signtest;