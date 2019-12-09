import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { toggleDrawer, DRAWER_WIDTH } from '../../redux/app/ducks'

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function Navbar({ toggleDrawer }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Secret Santa Creator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const mapDispatchToProps = { toggleDrawer }

export default connect(null, mapDispatchToProps)(Navbar)
