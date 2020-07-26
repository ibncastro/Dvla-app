import React, { PureComponent } from 'react';
// import carImg from ''

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import { CardActionArea } from '@material-ui/core';

class Cards extends PureComponent {
  render(){
    return (
      <Card elevation={3} style={{width: 350}}>
        <CardActionArea>
          <CardMedia image="../../../reptile.jpg" style={{height: 140}} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="p">Lizard</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">share</Button>
          <Button size="small" color="primary">Learn More</Button>
        </CardActions>
      </Card>
    )
  }
}

export default Cards