import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import EditIcon from '@material-ui/icons/Edit';
import RedeemIcon from '@material-ui/icons/Redeem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import { toggleDrawer, DRAWER_WIDTH } from '../../redux/app/ducks';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}));

function DrawerCustom({ drawerOpen, toggleDrawer, container }) {
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><RedeemIcon /></ListItemIcon>
          <ListItemText primary="Create a List" />
        </ListItem>
        <ListItem button component={Link} to="/edit">
          <ListItemIcon><EditIcon /></ListItemIcon>
          <ListItemText primary="Edit your List" />
        </ListItem>
      </List>
    </div>
  );

  return (
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
  );
}

const mapStateToProps = (state) => ({
  drawerOpen: state.app.drawerOpen
})

const mapDispatchToProps = { toggleDrawer }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerCustom)