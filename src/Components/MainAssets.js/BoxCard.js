import {
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SyncIcon from "@mui/icons-material/Sync";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CardList from "./CardList";
import axios from "axios";

const BoxCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3500/Products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          justifyContent: "space-evenly",
          backgroundColor: "#ededed",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "white",
            marginBottom: "80px",
            width: "300px",
            height: "100px",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "#fdd336" }}
            >
              <DoneOutlineIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Quality Product
            </Typography>
          </Toolbar>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "white",
            marginBottom: "80px",
            width: "300px",
            height: "100px",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "#fdd336" }}
            >
              <LocalShippingIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Free Shipping
            </Typography>
          </Toolbar>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "white",
            marginBottom: "80px",
            width: "300px",
            height: "100px",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "#fdd336" }}
            >
              <SyncIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              14-Day Return
            </Typography>
          </Toolbar>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "white",
            marginBottom: "80px",
            width: "300px",
            height: "100px",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "#fdd336" }}
            >
              <AddIcCallIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              24/7 Support
            </Typography>
          </Toolbar>
        </Stack>
      </Box>
      <Box>
        {/* <Typography variant='h4' sx={{fontWeight: "bold"}}>CATEGORIES</Typography> */}
        <Divider
          textAlign="left"
          sx={{ fontWeight: "bold", fontSize: "40px", color: "#3d464d" }}
        >
          CATEGORIES
        </Divider>
        {}
      </Box>
      <Box>
        {
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {products.map((product) => (
              <CardList
                key={product.id}
                url={product.url}
                name={product.name}
                stock={product.stock}
              />
            ))}
          </Box>
        }
      </Box>
    </Box>
  );
};

export default BoxCard;
