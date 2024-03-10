import React from 'react'
import classes from './login.module.css';
const Login = () => {
  return (
    <div>
      <main className="container-fluid">
        <div className="row align-items-center vh-100">
          <div className="col-sm-8 col-md-6 col-xl-3 mx-auto">
            <div className="card shadow">
              <div className="card-body ">
                {/* <h4 class="text-center my-4">company logo</h4>* /*/}
                <img
                  className="mx-auto d-block my-4"
                  height={50}
                  src="https://miro.medium.com/v2/resize:fit:1125/0*N1fmHtI8gmkH_2Vu.png"
                />
                <h5 className="text-center">login form</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Email-id
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
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
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  <small id="helpId" className="text-muted">
                    Enter valid password
                  </small>
                </div>
                <button className="btn btn-dark mt-4 ">submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Login;