import React, { Component } from 'react'

export class BasicInfo extends Component {
    render() {
        return (
            <div className="col-lg-6 col-12 p-0">
        <div className="card rounded-0 mb-0 p-2">
          <div className="card-header pt-50 pb-1">
            <div className="card-title">
              <h4 className="mb-0">Create Account</h4>
            </div>
          </div>
          <p className="px-2">Fill the below form to create a new account.</p>
          <div className="card-content">
            <div className="card-body pt-0">
              <form action="index.html">
                <div className="form-label-group">
                  <input type="text" id="inputName" className="form-control" placeholder="Name" required />
                  <label htmlFor="inputName">Name</label>
                </div>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email" required />
                  <label htmlFor="inputEmail">Email</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputConfPassword" className="form-control" placeholder="Confirm Password" required />
                  <label htmlFor="inputConfPassword">Confirm Password</label>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <fieldset className="checkbox">
                      <div className="vs-checkbox-con vs-checkbox-primary">
                        <input type="checkbox" defaultChecked />
                        <span className="vs-checkbox">
                          <span className="vs-checkbox--check">
                            <i className="vs-icon feather icon-check" />
                          </span>
                        </span>
                        <span className> I accept the terms &amp; conditions.</span>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <a href="auth-login.html" className="btn btn-outline-primary float-left btn-inline mb-50">Login</a>
                <button type="submit" className="btn btn-primary float-right btn-inline mb-50">Register
                </button></form></div>
          </div>
        </div>
      </div>
        )
    }
}

export default BasicInfo
