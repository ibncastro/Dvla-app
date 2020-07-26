import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NavBar.styles';

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'

import Popover from '@material-ui/core/Popover'

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1
    },
    Toolbar: {
      minHeight: 65
    },
    Typography: {
      padding: theme.spacing(2)
    }
}))

export default function NavBar() { 

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorNotification, setanchorNotification] = useState(null);
  const [anchorMessages, setAnchorMessages] = useState(null)
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleAnchorMessagesOpen = (e) => {
    setAnchorMessages(e.currentTarget);
  }

  const handleAnchorMessagesClose = (e) => {
    setAnchorMessages(null)
  }

  const handleNotificationOpen = (e) => {
    setanchorNotification(e.currentTarget)
  }

  const handleNotificationClose = (e) => {
    setanchorNotification(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const menuId = 'primary-search-account-menu';
  const notificationOpened = Boolean(anchorNotification)
  const messagesOpened = Boolean(anchorMessages)


  const NotificationId = notificationOpened ? 'simple-Notification-popover' : undefined
  const MessagesId = messagesOpened ? 'simple-Messages-popover' : undefined

  const renderMenu = (
    <Menu anchorEl={anchorEl}
    anchorOrigin={{vertical: 'top', horizontal:'right'}}
    id={menuId}
    keepMounted
    transformOrigin={{vertical: 'top', horizontal: 'right'}}
    open={isMenuOpen}
    onClose={handleMenuClose}>
      <MenuItem >Profile</MenuItem>
      <MenuItem >My Account</MenuItem>
    </Menu>
  )

  const MessagesPopover = (
    <Popover id={MessagesId} open={messagesOpened} anchorEl={anchorMessages} onClose={handleAnchorMessagesClose} anchorOrigin={{
      vertical: 'bottom', horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top', horizontal: 'center'
    }} >
      <Typography className={classes.Typography}>The content of the Popover</Typography>
    </Popover>
  )

  const NotificationPopover = (
    <Popover id={NotificationId} open={notificationOpened} anchorEl={anchorNotification} onClose={handleNotificationClose} anchorOrigin={{
      vertical: 'bottom', horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top', horizontal: 'center'
    }} >
      <Typography className={classes.Typography}>The content of the Popover</Typography>
    </Popover>
  )

    return (
      <div className={classes.grow}>
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
          <Toolbar variant="dense" className={classes.Toolbar}>            
            
            <Typography variant="h6" color="inherit">
              DVLA
            </Typography>
           <div className={classes.grow} />
           <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
              <MailIcon aria-describedby={MessagesId} variant="contained" onClick={handleAnchorMessagesOpen} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon aria-describedby={NotificationId} variant="contained" onClick={handleNotificationOpen} />
              </Badge>
            </IconButton>
            <IconButton edge="end" onClick={handleProfileMenuOpen} aria-label="account of current user" aria-haspopup="true" color="inherit">
              <AccountCircle />
            </IconButton>
           
          </Toolbar>
           </Container>
        </AppBar>
        {renderMenu}
        {NotificationPopover}
        {MessagesPopover}
      </div>
    );
  
}

