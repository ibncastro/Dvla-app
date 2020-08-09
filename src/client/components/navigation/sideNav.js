import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidenav extends Component {
  render() {
    return (
      <div className="horizontal-menu-wrapper">
        <div
          className="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-light navbar-without-dd-arrow navbar-shadow menu-border"
          role="navigation"
          data-menu="menu-wrapper"
        >
          <div
            className="navbar-container main-menu-content"
            data-menu="menu-container"
          >
            <ul
              className="nav navbar-nav pl-5"
              id="main-menu-navigation"
              data-menu="menu-navigation"
            >
              <Link to="/dashboard">
                <li className="dropdown nav-item">
                  <a className="nav-link">
                    <i className="feather icon-home" />
                    <span data-i18n="Dashboard">Dashboard</span>
                  </a>
                </li>
              </Link>
              <Link to="/profile">
                <li className="dropdown nav-item" data-menu="dropdown">
                  <a className="nav-link" href="#" data-toggle="dropdown">
                    <i className="feather icon-package" />
                    <span data-i18n="Apps">Profile</span>
                  </a>
                </li>
              </Link>
              <Link>
                <li className="dropdown nav-item" data-menu="dropdown">
                  <a className="nav-link" href="#" data-toggle="dropdown">
                    <i className="feather icon-layers" />
                    <span data-i18n="UI Elements">UI Elements</span>
                  </a>{" "}
                </li>
              </Link>

              <Link>
                <li className="dropdown nav-item" data-menu="dropdown">
                  <a className="nav-link" href="#" data-toggle="dropdown">
                    <i className="feather icon-file" />
                    <span data-i18n="Pages">Pages</span>
                  </a>
                </li>
              </Link>
              <Link>
                <li className="dropdown nav-item" data-menu="dropdown">
                  <a className="nav-link" href="#" data-toggle="dropdown">
                    <i className="feather icon-bar-chart-2" />
                    <span data-i18n="Charts & Maps">Charts &amp; Maps</span>
                  </a>{" "}
                </li>
              </Link>
              <Link>
                <li className="dropdown nav-item" data-menu="dropdown">
                  <a className="nav-link" href="#" data-toggle="dropdown">
                    <i className="feather icon-more-horizontal" />
                    <span data-i18n="Others">Others</span>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
