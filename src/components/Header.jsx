import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
export const Header = () => {
  
  return (
    <>  <Box sx={{width:"98vw",alignItems:"center",textAlign:"center"}}>
    <AppBar position="static">
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
        <Typography variant="h5" component="div" sx={{ flexGrow: 6,textAlign:"center"}}>
          Sing Praises
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  </Box></>
  )
}
