import React, { Component } from "react";
import Error from '../../components/error'

export class AccountDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, error, loading } = this.props;
    return (
      <div className="col-lg-6 col-12 p-0">
        <div className="card rounded-0 mb-0 p-2">
          <div className="card-header pt-50 pb-1">
            <div className="card-title">
              <h4 className="mb-0">Account Details</h4>
              {error && (
                <Error>
                  <h4>There was an error loggin in!</h4>
                </Error>
              )}
            </div>
          </div>
          <div className="card-content">
            <div className="card-body pt-0">
              <form onSubmit={this.continue}>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange("email")}
                    defaultValue={values.email}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Username"
                    onChange={handleChange("username")}
                    defaultValue={values.username}
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputName"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange("password")}
                    defaultValue={values.password}
                    required
                  />
                  <label htmlFor="inputName">Password</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="confirm"
                    className="form-control"
                    placeholder="Confirm Passsword"
                    onChange={handleChange("confirmPassword")}
                    defaultValue={values.confirmPassword}
                    required
                  />
                  <label htmlFor="confirm">Confirm Password</label>
                </div>

                <button
                  onClick={this.back}
                  className="btn btn-outline-primary float-left btn-inline mb-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-primary float-right btn-inline"
                >
                  {loading ? (
                    <span
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : 
                    "Complete"
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountDetails;
