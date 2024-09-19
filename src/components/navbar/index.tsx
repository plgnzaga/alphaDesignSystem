import AccountCircle from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import acnLogo from "../../theme/dist/images/logo.png";

export default function Navbar() {


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" aria-navbar='light'>
        <Toolbar>
            <Grid sx={{display:'flex',gap:'0.5rem'}}>
                <img src={acnLogo} style={{width:'25px',aspectRatio:'1'}} />
           
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Alpha
                </Typography>
            </Grid>

            <Grid sx={{marginLeft:'auto'}}>
            <Typography variant='disclaimer' color={'primary'}>Hi, <strong>Paul</strong></Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
               
              </IconButton>
             
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Sign out</MenuItem>
              </Menu>
            </Grid>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}