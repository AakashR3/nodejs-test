import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FooterStyle from "./FooterStyle";
import { Box, Button, Stack, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailIcon from '@mui/icons-material/Mail';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

const Footer = () => {
  return (
    <AppBar className="main" style={FooterStyle.main}>
      <Toolbar>
        <Box sx={FooterStyle.Aligns}>
          <h3>--- GET IN TOUCH ---</h3>
          <h3>--- SERVICE AREAS ---</h3>
          <h3>--- COLLECTIONS ---</h3>
          <h3>--- NEWSLETTER ---</h3>
        </Box>
      </Toolbar>
      <Box sx={FooterStyle.flexrow}>
        <Box sx={FooterStyle.left}>
          <ul style={FooterStyle.liststyle}>
            <p style={FooterStyle.para}>
            We make grocery shopping easy and convenient,
            Your one-stop shop for all your grocery needs,
            Discover a world of flavors in our aisles.
            </p>
            <li  style={FooterStyle.listlalign}><PhoneForwardedIcon sx={FooterStyle.color}/> +91 8749373628</li>
     
          </ul>
        </Box>
        <Box sx={FooterStyle.left}>
          <ul style={FooterStyle.liststyle}>
            <li>Coimbatore</li>
            <li>Chennai</li>
            <li>Tenkasi</li>
            <li>Madurai</li>
            <li>Thoothukudi</li>
          </ul>
        </Box>
        <Box sx={FooterStyle.left}>
          <ul style={FooterStyle.liststyle}>
            <li>Shirts</li>
            <li>Jeans</li>
            <li>Tops</li>
            <li>Shoes</li>
            <li>Moderns</li>
          </ul>
        </Box>
        <Box sx={FooterStyle.left}>
          <ul style={FooterStyle.liststyle}>
            <li>
              <p style={{width: "300px", marginBottom: 10}}>
              Welcome ! Happy New Year Offer.
              Please Email Get 2X Cashback
              </p>
              </li>
            <li>
              <div style={FooterStyle.inputContainer}>
              <MailIcon style={FooterStyle.inputContainer.Icon} />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  style={FooterStyle.inputContainer.inputFiled}
                />
              </div>
            </li>

            <li>
              {" "}
              <Box sx={{ marginTop: 1 }}>
                <Fab
                  color="primary"
                  aria-label="add"
                  style={{ backgroundColor: "#0D378D", height: "20px" }}
                >
                  <FacebookOutlinedIcon />
                </Fab>
                <Fab
                  color="secondary"
                  aria-label="edit"
                  style={{ backgroundColor: "#1A90D6", height: "20px" }}
                >
                  <TwitterIcon />
                </Fab>
                <Fab
                  color="primary"
                  aria-label="add"
                  style={{ backgroundColor: "#127206", height: "20px" }}
                >
                  <WhatsAppIcon />
                </Fab>
                <Fab
                  color="secondary"
                  aria-label="edit"
                  style={{ backgroundColor: "#E22C28", height: "20px" }}
                >
                  <YouTubeIcon />
                </Fab>
              </Box>
            </li>
          </ul>
        </Box>
      </Box>
      <p>
        -----------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
      <Box sx={FooterStyle.domain}>
        <Box sx={FooterStyle.domain2}>
          <h4>&copy; <strong style={FooterStyle.color}>MultiShop</strong> | Buy One Get Two Offer <strong style={FooterStyle.color}>24/7-365</strong> Days</h4>
          <img
            src="/images/logos.png"
            height="50px"
            width="250px"
            style={{ marginTop: "5px" }}
          />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Footer;
