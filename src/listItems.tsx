import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
//import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      About Account
    </ListSubheader>
    <ListItemButton href="/Firstpage">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Fund Transfer
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <MonetizationOnIcon />;
      </ListItemIcon>
      <ListItemText primary="Local Transfer" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Deposit" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Check deposit" />
    </ListItemButton>
  </React.Fragment>
);

export const thirdListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Authentication
    </ListSubheader>
    <ListItemButton href="/SignIn">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton>
  </React.Fragment>
);