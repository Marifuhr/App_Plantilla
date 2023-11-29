
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import logo from '../assets/logo_corralon.jpg'
import { Link } from 'react-router-dom';
import AppsMenu from './AppsMenu';


function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ['Inicio', 'Servicios', 'Nosotros', 'Contacto'];

  return (
    <AppBar position="fixed">
    <Container maxWidth="xl" sx={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#F79984' }}>
      <Toolbar disableGutters sx={{ display: 'flex' }}>
        <img src={logo} alt="Logo" />

        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/servicios"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box
  sx={{
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  {pages.map((page) => {
    if (page === 'Inicio') {
      return (
        <Button
        key={page}
        component={Link}
        to="/inicio"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      );
    } else if (page === 'Servicios') {
      return (
        <Button
        key={page}
        component={Link}
        to="/servicios"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      );
    } else if (page === 'Nosotros') {
      return (
        <Button
        key={page}
        component={Link}
        to="/nosotros"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      );
    } else if (page === 'Contacto') {
      return (
        <Button
        key={page}
        component={Link}
        to="/contacto"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      );
    } else {
      return (
        <Button
        key={page}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      );
    }
  })}
</Box>
  <AppsMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;