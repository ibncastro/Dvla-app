import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const Dashboard = lazy(() => import('./Dashboard'))
const Profile = lazy(() => import('./Profile'))

const routes = [
    {
        path: '/dashboard',
        main: <Dashboard />
    }, {
        path: '/profile',
        main: <Profile />
    }
]

export default class Content extends Component {
  render() {
    return (
      <div className="app-content content">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body"></div>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              {routes.map((route, index) => (
                <Route path={route.path} key={index} children={route.main} />
              ))}
            </Suspense>
          </Switch>
        </div>
      </div>
      //   </div>
    );
  }
}
