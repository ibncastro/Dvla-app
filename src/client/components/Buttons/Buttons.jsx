import React from 'react';
import './Buttons.css'
//import { Test } from './Home.styles';

import { ButtonToolbar, IconButton, Icon } from 'rsuite'


export default function Buttons() {
  return (
    <ButtonToolbar>
      <IconButton color="orange" icon={<Icon icon="plus" />} placement="right">
        Register New Vehicle
      </IconButton>
      <IconButton color="blue" icon={<Icon icon="plus" />} placement="right">
        Renew Vehicle Registration
      </IconButton>
      <IconButton color="cyan" icon={<Icon icon="plus" />} placement="right">
        Change of OwnerShip
      </IconButton>
    </ButtonToolbar>
  )
}