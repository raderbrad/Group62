
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
  } from "@mui/material";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from './COBRAEATS.png';
import Image from 'mui-image';


const StyledToolbar = styled(Toolbar)({
    backgroundColor:"darkred",
    display: "flex",
    justifyContent: "space-between",
  });
  
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Profile = styled("div")(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center', }
}));



const Navbar = () => {

    const user= null;

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography component={Link} to="/"><Image src={logo} height={75} width={75}/></Typography>
                {/*<Image sx={{src:{logo}, width:'50', height:'50', display: {xs: "block",sm:"none"}}}/>*/}
                <Search><InputBase placeholder='search recipes'/></Search>
                <Toolbar>
                    {user? (
                        <Profile><Avatar /*alt={user.result.name} src={user.result.imageUrl}*/></Avatar></Profile>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color='primary'>Sign In</Button>
                        
                    )}
                </Toolbar>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;