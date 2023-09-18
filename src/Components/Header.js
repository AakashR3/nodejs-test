import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Selection from "./HeaderAsset.js/Selection";
import { Link } from "react-router-dom";



const Header = () => {
 
  const StyledToolBar = styled(Toolbar)({
    backgroundColor: "#3d464d ",
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Box sx={{
          display:"flex", alignItems: "center", gap:3, fontWeight: "bold", fontSize: "18px"
          
          }}>
          <Selection />
            <Typography variant="p" sx={{color: "#fdd336 "}}><Link to="/">Home</Link></Typography>
            <Typography variant="p" sx={{"&:hover":{
            color: "#fdd336 "
          }}}><Link to="/shop">Shop</Link></Typography>
            <Typography variant="p" sx={{"&:hover":{
            color: "#fdd336 "
          }}}><Link to="/page">Page</Link></Typography>
            <Typography variant="p" sx={{"&:hover":{
            color: "#fdd336 "
          }}}><Link to="/contact">Contact</Link></Typography>
        </Box>

        <Box sx={{display:"flex", alignItems: "center", gap:3}}>
          <Badge badgeContent={4} color="primary">
            <MailIcon sx={{color: "#fdd336 "}}/>
          </Badge>
          <Badge badgeContent={4} color="primary">
            <FavoriteIcon sx={{color: "#fdd336 "}}/>
          </Badge>
          <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300" />
          </Box>

      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
