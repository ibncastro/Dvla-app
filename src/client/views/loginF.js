import React, { Component } from 'react'
import LoginMutation from '../components/mutations/login'

import loginImg from "../app-assets/images/pages/login.png"

 class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  login = (event) => {
    event.preventDefault();
    this.props.login({ variables: {
      email: this.state.email,
      password: this.state.password
    }})
  }

    render() {
      const { error, loading } = this.props;
        return (
          <div>           
            {/* <div className="app-content content">
              <div className="content-overlay">
              <div className="header-navbar-shadow"></div>
                <div className="content-wrapper">
                  <div className="content-header row"></div>
                  <div className="content-body"></div> */}
                  <section className="row flexbox-container">
                    <div className="col-xl-8 col-11 d-flex justify-content-center">
                      <div className="card bg-authentication rounded-0 mb-0">
                        <div className="row m-0">
                          <div className="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                            <img
                              src={loginImg}
                              alt="branding logo"
                            />
                          </div>
                          <div className="col-lg-6 col-12 p-0">
                            <div className="card rounded-0 mb-0 px-2">
                              <div className="card-header pb-1">
                                <div className="card-title">
                                  <h4 className="mb-0">Login</h4>
                                </div>
                              </div>
                              <p className="px-2">
                                Welcome back, please login to your account.
                              </p>
                              <div className="card-content">
                                <div className="card-body pt-1">
                                  <form onSubmit={this.login}>
                                    <fieldset className="form-label-group form-group position-relative has-icon-left">
                                      <input
                                        type="text"
                                        onChange={(event) => this.setState({email: event.target.value})}
                                        className="form-control"
                                        id="user-name"
                                        placeholder="Email"
                                        required
                                      />
                                      <div className="form-control-position">
                                        <i className="feather icon-user" />
                                      </div>
                                      <label htmlFor="user-name">
                                        Email
                                      </label>
                                    </fieldset>
                                    <fieldset className="form-label-group position-relative has-icon-left">
                                      <input
                                        type="password"
                                        className="form-control"
                                        id="user-password"
                                        placeholder="Password"
                                        onChange={(event) => this.setState({password: event.target.value})}
                                        required
                                      />
                                      <div className="form-control-position">
                                        <i className="feather icon-lock" />
                                      </div>
                                      <label htmlFor="user-password">
                                        Password
                                      </label>
                                    </fieldset>
                                    <div className="form-group d-flex justify-content-between align-items-center">
                                      <div className="text-left">
                                        <fieldset className="checkbox">
                                          <div className="vs-checkbox-con vs-checkbox-primary">
                                            <input type="checkbox" />
                                            <span className="vs-checkbox">
                                              <span className="vs-checkbox--check">
                                                <i className="vs-icon feather icon-check" />
                                              </span>
                                            </span>
                                            <span className>Remember me</span>
                                          </div>
                                        </fieldset>
                                      </div>
                                      <div className="text-right">
                                        <a
                                          href="auth-forgot-password.html"
                                          className="card-link"
                                        >
                                          Forgot Password?
                                        </a>
                                      </div>
                                    </div>
                                    <a
                                      href="auth-register.html"
                                      className="btn btn-outline-primary float-left btn-inline"
                                    >
                                      Register
                                    </a>
                                    <button
                                      type="submit"
                                      className="btn btn-primary float-right btn-inline"
                                    >
                                      Login
                                    </button>
                                  </form>
                                </div>
                              </div>
                              <div className="login-footer">
                                <div className="divider">
                                  <div className="divider-text">OR</div>
                                </div>
                                <div className="footer-btn d-inline">
                                  <a href="#" className="btn btn-facebook">
                                    <span className="fa fa-facebook" />
                                  </a>
                                  <a href="#" className="btn btn-twitter white">
                                    <span className="fa fa-twitter" />
                                  </a>
                                  <a href="#" className="btn btn-google">
                                    <span className="fa fa-google" />
                                  </a>
                                  <a href="#" className="btn btn-github">
                                    <span className="fa fa-github-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
          //     </div>
          //   </div>
          // </div>
        );
    }
}

export default class LoginRegister extends Component {
  render(){
    const { changeLoginState } = this.props;
    return (
      <LoginMutation changeLoginState={changeLoginState} >
        <Login />
      </LoginMutation>
    )
  }
}
