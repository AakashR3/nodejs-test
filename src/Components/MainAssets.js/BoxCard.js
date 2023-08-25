import { Box, Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SyncIcon from '@mui/icons-material/Sync';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CardList from './CardList';

const BoxCard = () => {
  return (
    <Box>
    <Box sx={{display:"flex", flexDirection:"row", gap: "30px", justifyContent:"space-evenly", backgroundColor: "#ededed"}}>
        <Stack sx={{backgroundColor: "white", marginBottom: "80px", width:"300px", height:"100px", justifyContent:"center", marginTop:"80px"}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color:"#fdd336"}}>
                <DoneOutlineIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
                  Quality Product
                </Typography>
            </Toolbar>         
         </Stack>
         <Stack sx={{backgroundColor: "white", marginBottom: "80px", width:"300px", height:"100px", justifyContent:"center", marginTop:"80px"}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 ,color:"#fdd336"}}>
                <LocalShippingIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
                Free Shipping
                </Typography>
            </Toolbar>         
         </Stack>
         <Stack sx={{backgroundColor: "white", marginBottom: "80px", width:"300px", height:"100px", justifyContent:"center", marginTop:"80px"}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 ,color:"#fdd336"}}>
                <SyncIcon sx={{ fontSize: 40 }}/>
                </IconButton>
                <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
                14-Day Return
                </Typography>
            </Toolbar>         
         </Stack>
         <Stack sx={{backgroundColor: "white", marginBottom: "80px", width:"300px", height:"100px", justifyContent:"center", marginTop:"80px"}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 ,color:"#fdd336"}}>
                <AddIcCallIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
                24/7 Support
                </Typography>
            </Toolbar>         
         </Stack>
    </Box>
    <Box>
          {/* <Typography variant='h4' sx={{fontWeight: "bold"}}>CATEGORIES</Typography> */}
          <Divider textAlign="left" sx={{fontWeight: "bold", fontSize: "40px", color:"#3d464d"}}>CATEGORIES</Divider>
    </Box>
        <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <CardList url="https://m.media-amazon.com/images/I/71if7aRX5US._SY575_.jpg"/>
          <CardList url="https://5.imimg.com/data5/DM/QL/FZ/SELLER-20490163/cap2.jpg"/>
          <CardList/>
          <CardList/>
        </Box>    
        <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <CardList/>
          <CardList/>
          <CardList/>
          <CardList/>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <CardList/>
          <CardList/>
          <CardList/>
          <CardList/>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <CardList/>
          <CardList/>
          <CardList/>
          <CardList/>
        </Box>
    </Box>
  )
}

export default BoxCard