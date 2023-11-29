import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Apps from '@mui/icons-material/Apps';

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
        <MenuItem>
          Search
        </MenuItem>
        <MenuItem>
          Maps
        </MenuItem>
        <MenuItem>
          Mail
        </MenuItem>
        <MenuItem>
          Drive
        </MenuItem>
        <MenuItem>
          Calendar
        </MenuItem>
      </Menu>
    </>
  );
}

export default AppsMenu;