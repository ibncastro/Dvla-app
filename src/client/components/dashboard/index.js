import React, { Component } from 'react'
import Vehicle from './head'
import VehiclesQuery from '../Queries/fetchRegs'
import VRegs from '../vRegs/index'

export default class Dashboard extends Component {
    render() {
        return (
            <VRegs />
        )
    }
}
