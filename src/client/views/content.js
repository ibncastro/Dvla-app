import React, { Component, Suspense, lazy } from 'react'
import Sidenav from '../components/navigation/sideNav'
import Mainnav from '../components/navigation/Main-nav'
import { UserConsumer } from '../components/context/user'

import { Route, Switch } from 'react-router-dom'

const routes = [
    {
        path: "/dashboard",
        main: lazy(() => import("../components/dashboard"))
    }, {
        path: "/profile",
        main: lazy(() => import("../components/account"))
    }, {
      path: "/registerNewVehicle",
      main: lazy(() => import("../components/registerVehicle"))
    },{
      path: "/changeOwnerShip",
      main: lazy(() => import("../components/changeOwner"))
    }
]

export default class AllContent extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          <Mainnav changeLoginState={this.props.changeLoginState} />
        </UserConsumer>

        <Sidenav />
        <div className="app-content content">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body"></div>
            <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                {routes.map((route, index) => (
                  <Route
                    path={route.path}
                    key={index}
                    children={<route.main />}
                  />
                ))}
              </Suspense>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
