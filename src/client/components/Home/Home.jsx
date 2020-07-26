import React, { PureComponent } from 'react';
import { Padding } from './Home.styles'

import Card from '../Card'

import Grid from '@material-ui/core/Grid'


class Home extends PureComponent {
  render(){
    return (
      <Padding>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            <Card />
          </Grid>
        </Grid>
      </Padding>
        
    )
  }
}

export default Home