import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

class NewAppBar extends Component {
    
    
    render() {
        return <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" classNameName="menuButton" color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" classNameName="titleName">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    }
}

export default NewAppBar;