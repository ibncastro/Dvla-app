import React, { Component } from 'react'
import VRegQuery from '../Queries/fetchRegs'
import VRegistrations from './vRegistrations'

export default class VRegs extends Component {
    render() {
        const {vregs} = this.props;
        return (
            <VRegQuery>
                <VRegistrations vreg={vregs} />
            </VRegQuery>
        )
    }
}
