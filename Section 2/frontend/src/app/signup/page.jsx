'use client'
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  name : Yup.string().required('naam nhi hai tumhara')
  .min(3, 'too short'),
  email: Yup.string().required('email nhi hai tumhara')
  .email('aisa mail nhi hota').min(4, 'too short'),
  password: Yup.string().required('password nhi hai tumhara')
  .min(4, 'too short')
  .matches(/[a-z]/, 'lower case required')
  .matches(/[A-Z]/, 'uppercase letter required')
  .matches(/[\W]/, 'special character required')
  .matches(/[0-9]/, 'number required'),
  confirmPassword: Yup.string().required('password nhi hai tumhara')
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const signupForm = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : '',
      confirmPassword : ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
   validationSchema: signupSchema   //what is this signupSchema
  })
  return (
    <section className="vh-100 bg-primary-subtle">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                  {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-primary fw-bold">
                      Registration Form
                    </h3>
                    <form onSubmit={signupForm.handleSubmit}>

                      <div class="mb-3">
                        <label for="" class="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={ signupForm.handleChange }
                          values={ signupForm.values.email }
                          className="form-control"     //why class not className
                          placeholder=""
                          />
                          {
                            signupForm.touched.email && (
                              <small class='text-danger'>{signupForm.errors.email}</small>

                            )
                          }
                        <small className="text-muted">Enter Valid Email Address</small>
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={signupForm.handleChange}
                          values={signupForm.values.name}
                          className="form-control"
                          placeholder=""
                        />
                        {
                            signupForm.touched.name && (
                              <small className='text-danger'>{signupForm.errors.name}</small>
                            )
                          }
                        <small class="text-muted">Enter Full Name</small>
                      </div>
                      <div class="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input
                          type="text"
                          id="password"
                          onChange={signupForm.handleChange}
                          values = {signupForm.values.password}
                          className="form-control"
                          placeholder=""
                        />
                        {
                            signupForm.touched.password && (
                              <small class='text-danger'>{signupForm.errors.password}</small>

                            )
                          }
                        <small class="text-muted">Enter Strong Password</small>
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          onChange={signupForm.handleChange}
                          values={signupForm.values.confirmPassword}
                          class="form-control"
                          placeholder=""
                        />
                        {
                            signupForm.touched.confirmPassword && (
                              <small class='text-danger'>{signupForm.errors.confirmPassword}</small>

                            )
                          }
                        <small className="text-muted">Enter same password</small>
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>

                    <p>Already Registered? <Link href='/login'>Login Here</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup;