import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ListOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomBar({ bottomBarAction, setBottomBarAction }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position={'fixed'} color={'primary'} className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge={'end'}
            color={'inherit'}
            onClick={handleListClick}
            className={bottomBarAction}
          >
            <ListOutlined />
          </IconButton>
          <div className={classes.grow} />
          <IconButton
            edge={'end'}
            color={'inherit'}
            onClick={handleMapClick}
            className={bottomBarAction}
          >
            <MapOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
  function handleListClick() {
    setBottomBarAction('list');
  }
  function handleMapClick() {
    setBottomBarAction('map');
  }
}
