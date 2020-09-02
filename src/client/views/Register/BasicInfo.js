import React, { Component } from 'react'

export class BasicInfo extends Component {
  
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="col-lg-6 col-12 p-0">
        <div className="card rounded-0 mb-0 p-2">
          <div className="card-header pt-50 pb-1">
            <div className="card-title">
              <h4 className="mb-0">Add Basic Details</h4>
            </div>
          </div>
          {/* <p className="px-2">Fill the below form to create a new account.</p> */}
          <div className="card-content">
            <div className="card-body pt-0">
              <form>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="fname"
                    className="form-control"
                    placeholder=" First Name"
                    onChange={handleChange("firstName")}
                    defaultValue={values.firstName}
                    required
                  />
                  <label htmlFor="fname">First Name</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="mname"
                    className="form-control"
                    placeholder=" Middle Name"
                    onChange={handleChange("middleName")}
                    defaultValue={values.middleName}
                    required
                  />
                  <label htmlFor="mname">Middle Name</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="lname"
                    className="form-control"
                    placeholder=" Last Name"
                    onChange={handleChange("lastName")}
                    defaultValue={values.lastName}
                    required
                  />
                  <label htmlFor="lname">Last Name</label>
                </div>
                <ul className="list-unstyled mb-2" onChange={handleChange("Gender")}>
                  <li className="d-inline-block mr-2">
                    <fieldset>
                      <div className="vs-radio-con">
                        <input
                          type="radio"
                          name="gender"
                          value="Male"                          
                          // defaultValue={values.Gender}
                          checked={values.Gender === "Male"}
                          onChange={handleChange("gender")}
                        />
                        <span className="vs-radio">
                          <span className="vs-radio--border" />
                          <span className="vs-radio--circle" />
                        </span>
                        <span >Male</span>
                      </div>
                    </fieldset>
                  </li>
                  <li className="d-inline-block mr-2">
                    <fieldset>
                      <div className="vs-radio-con">
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          // defaultValue={values.Gender}
                          checked={values.Gender === "Female"}
                          onChange={handleChange("gender")}
                        />
                        <span className="vs-radio">
                          <span className="vs-radio--border" />
                          <span className="vs-radio--circle" />
                        </span>
                        <span >Female</span>
                      </div>
                    </fieldset>
                  </li>
                </ul>
                
                <a
                  href="auth-login.html"
                  className="btn btn-outline-primary float-left btn-inline mb-50"
                >
                  Login
                </a>
                <button
                  onClick={this.continue}
                  className="btn btn-primary float-right btn-inline mb-50"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInfo
