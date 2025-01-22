import React from 'react'
import { AppBar,Box,Button,Toolbar,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar style={{backgroundColor:'black'}}>
        
         
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BLOGAPP
        </Typography>
        <Link to={'/blogs'}><Button color="inherit" style={{color:'white'}}>Home</Button></Link>
        <Link to={'/addblogs'}><Button color="inherit" style={{color:'white'}}>Addblog</Button></Link>
        <Link to={'/'}><Button color="inherit" style={{color:'white'}} onClick={()=>{
          sessionStorage.removeItem('logintoken');
        } }>Logout</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar