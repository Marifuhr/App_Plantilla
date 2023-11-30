import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Apps from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';

function AppsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="apps menu"
        aria-controls="apps-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
      >
        <Apps />
      </IconButton>

      <Menu
        id="apps-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem component={Link} to="/corralon">
          Corralón
        </MenuItem>
        <MenuItem component={Link} to="/ferreteria">
         Ferretería
        </MenuItem>
        <MenuItem component={Link} to="/ofertas">
          Ofertas
        </MenuItem>
        <MenuItem component={Link} to="/pagos">
          Medios de Pago
        </MenuItem>
        <MenuItem component={Link} to="/acopios">
         Acopios
        </MenuItem>
      </Menu>
    </>
  );
}

export default AppsMenu;