import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
    render() {
        return (
            <Link to="/dashboard" className="btn btn-success">Dashboard</Link>
        )
    }
}
