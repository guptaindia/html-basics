'use client'
import { useFormik } from 'formik';
import React from 'react'
import classes from './login.module.css';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email : Yup.string().required('registered hi likho')
  .min(3, 'too short').email('sahi wala dalo'),
  password: Yup.string().required('wahi wala dalo bhai')
  .min(8, 'chota hai'),
})
const Login = () => {

  const loginForm = useFormik({
    initialValues : {
      email : '',
      password : ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema : loginSchema
  })
  return (
    <div>
      <main className="container-fluid">
        <div className="row align-items-center vh-100 ">
          <div className="col-sm-8 col-md-6 col-xl-3 mx-auto ">
            <div className="card shadow ">
              <div className="card-body ">
                {/* <h4 class="text-center my-4">company logo</h4>* /*/}
                <img
                  className={classes.thumbpost} 
                  //height={60}
                  src="https://t3.ftcdn.net/jpg/04/54/09/98/360_F_454099801_32LqElT2W1vgRQ6YRsp3h2IsKQxTCnaG.jpg"
                />
                {/* <h5 className="text-center">login form</h5> */}
                <form onSubmit={loginForm.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Email-id
                    </label>
                    <input
                      type="text"
                      //name=""
                      id="email"
                      onChange={loginForm.handleChange}
                      values={loginForm.values.email}
                      className="form-control"
                      placeholder=""
                      aria-describedby="helpId"
                    />
                    <small id="helpId" className="text-muted">
                      Enter registered email address
                    </small>
                  </div>
                </form>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={loginForm.handleChange}
                      values={loginForm.values.password}
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  <small id="helpId" className="text-muted">
                    Enter valid password
                  </small>
                </div>
                <button className= {classes.myBtn } >submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Login;