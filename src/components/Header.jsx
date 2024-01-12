import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import "./Style.css"
import { useNavigate } from 'react-router-dom';

const settings = ['Add New Song', 'Profile', '', 'Logout'];
export const Header = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };


  return (
    <>  <Box sx={{ alignItems: "center", textAlign: "center", margin: "auto", position: 'sticky', top: 0, zIndex: "1000" ,backgroundColor: "#e8dfd6"}} stickyHeader>
      <AppBar position="sticky" sx={{backgroundColor: "#e8dfd6b4"}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon/> */}
          </IconButton>
          <Typography variant="h5" class="container" component="div" sx={{ textAlign: "center", }}>
            {/* Sing Praises */}

            <h2 class="title" sx={{ textAlign: "center", }}>
              <span class="title-word title-word-1"> Sing</span>
              <span class="title-word title-word-1"> </span>
              <span class="title-word title-word-2">Praises</span>
            </h2>
          </Typography>
          <Box sx={{ flexGrow: 0, position: "sticky" }}>
            <Button variant='contained' onClick={() => navigate("/AddNewSong")}>Add New Song</Button>
            <Tooltip title="Open settings">
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box></>
  )
}
