import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Drawer from '@mui/material/Drawer';
import ToggleBtn from '../RightDrawer/ToggleBtn';

const pages = ['코딩테스트 연습'];

const ResponsiveAppBar = ({ menuDisplay = false }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Drawer States
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
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
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to="/questions" style={{ textDecoration: 'none' }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {menuDisplay && (
            <>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'space-evenly'
                }}
              >
                <Typography
                  sx={{
                    flexGrow: 0,
                    minWidth: 250,
                    display: { xs: 'none', lg: 'flex' },
                    justifyContent: 'center',
                    backgroundColor: '#D1D7E5',
                    padding: '1px 20px',
                    borderRadius: '5px',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                >
                  소프트웨어공학
                </Typography>
                <Box
                  sx={{
                    flexGrow: 0,
                    minWidth: 250,
                    maxWidth: 'lg',
                    display: { xs: 'none', lg: 'flex' },
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#D1D7E5',
                    padding: '1px 20px',
                    borderRadius: '5px',
                    color: 'black'
                  }}
                >
                  <ArrowLeftIcon sx={{ cursor: 'pointer' }} />
                  <Typography sx={{ fontWeight: 'bold' }}>week 1: 피보나치 수</Typography>
                  <ArrowRightIcon sx={{ cursor: 'pointer' }} />
                </Box>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'flex-end'
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#D1D7E5',
                    padding: '1px 20px',
                    borderRadius: '5px',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                >
                  2d 30h 30m 남음
                </Box>
              </Box>
            </>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              onClick={toggleDrawer('right', true)}
            >
              <SettingsIcon />
            </IconButton>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
              <ToggleBtn />
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
