import React, { Component } from 'react'
import VRegQuery from '../Queries/fetchRegs'
import VRegistrations from './vRegistrations'
import { UserConsumer } from '../context/user';

export default class VRegs extends Component {
  render() {
    const { vregs } = this.props;
    return (
      <UserConsumer>
        <VRegQuery>
          <VRegistrations vreg={vregs} />
        </VRegQuery>
      </UserConsumer>
    );
  }
}
