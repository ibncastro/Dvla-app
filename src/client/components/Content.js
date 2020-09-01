import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const routes = [
    {
        path: "/dashboard",
        main: lazy(() => import("./dashboard/head"))
    }, {
        path: "/profile",
        main: lazy(() => import("./Profile"))
    }
]

export default class Content extends Component {
  render() {
    return (
      
      //   </div>
    );
  }
}
