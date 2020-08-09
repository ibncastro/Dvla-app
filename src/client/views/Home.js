import React, { Component } from 'react'


import Sidenav from '../components/navigation/sideNav'
import Mainnav from '../components/navigation/Main-nav'
import Content from '../components/Content'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Mainnav />
                <Sidenav />
                <Content />
            </div>
        )
    }
}
