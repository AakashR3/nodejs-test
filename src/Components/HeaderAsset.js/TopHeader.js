import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Stack,
    Toolbar,
    styled,
  } from "@mui/material";
  import React from "react";
  import MailIcon from '@mui/icons-material/Mail';
  import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchBar from "./SearchBar";

const TopHeader = () => {
    const StyledToolBar = styled(Toolbar)({
        backgroundColor: "white ",
        display: "flex",
        justifyContent: "space-between",
      });
    
      return (
        <AppBar position="sticky">
          <StyledToolBar>
               <img src="/images/Loco.jpg" alt="Logo" style={{ boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}/>
               <SearchBar/>
             <Stack  direction="column" spacing={0.3} >
               <p style={{color: "black"}}>Customer Service</p>
               <h3 style={{color: "black"}}>+91 8937362893</h3>
               </Stack>
             
          </StyledToolBar>
        </AppBar>
      );
    };


export default TopHeader