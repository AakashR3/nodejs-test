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
          <CardList url="https://m.media-amazon.com/images/I/71if7aRX5US._SY575_.jpg" name="Sports Shoes" stock="100+ varients"/>
          <CardList url="https://5.imimg.com/data5/DM/QL/FZ/SELLER-20490163/cap2.jpg" name="Lux Look Cap" stock="23+ varients"/>
          <CardList url="https://m.media-amazon.com/images/I/71CMtFGDhxL.jpg" name="UiniCon Watch" stock="89+ varients"/>
          <CardList url="https://rukminim2.flixcart.com/image/850/1000/khuvxjk0-0/sunglass/u/z/j/55-square-029-devew-original-imafxs4xjw7h9gr5.jpeg?q=20" name="Sunset Chill Glasses" stock="189+ varients"/>
        </Box>    
        <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <CardList url="https://m.media-amazon.com/images/I/71tQ5qlP53L._UY575_.jpg" name="Wood Bracelet" stock="19+ varients"/>
          <CardList url="https://m.media-amazon.com/images/I/31lqaKaSS5L._AC_UY1100_.jpg" name="Vembley Rings" stock="139+ varients"/>
          <CardList url="https://rukminim1.flixcart.com/image/850/850/l3xcr680/slipper-flip-flop/h/l/t/9-pug-01-maroon-slippers-leaf-footwear-maroon-original-imagexxyeejrgcfz.jpeg?q=20" name="Leaf Footwear" stock="91+ varients"/>
          <CardList url="https://quickbutik.imgix.net/15595s/products/61c21a879e84f.jpeg" name="Dark Blacky Pods" stock="131+ varients"/>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <CardList url="https://www.reliancedigital.in/medias/Canon-EOS-200D-II-DSLR-Camera-491431412-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MjA3M3xpbWFnZS9qcGVnfGltYWdlcy9oZWIvaGE0LzkxMzgzODQwMTEyOTQuanBnfGVkZjVkNzAxZDU3OGZlNWYwOGY0OTA0YjA4YzgzMjYyNGFkYzYwMzE4YjgyNDhmODFmMDU4YTM0NTI2Zjc3ZjA" name="Warmly Camera" stock="19+ varients"/>
          <CardList url="https://www.amkette.com/cdn/shop/products/EvoFox-Phantom-Gaming-Mouse-Hero.png?v=1677494422" name="FoxRed Mouse" stock="189+ varients"/>
          <CardList url="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-14-Plus/Blue/Apple-iPhone-14-Plus-Blue-thumbnail.png" name="IPhone Red 13.4" stock="19+ varients"/>
          <CardList url="https://www.jiomart.com/images/product/original/491570871/western-digital-1-5-tb-element-wdbu6y0015bbk-wesn-portable-hard-disk-drive-hdd-digital-o491570871-p590035057-2-202009260046.jpeg?im=Resize=(1000,1000)" name="Disk Model Mars" stock="18+ varients"/>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <CardList url="https://m.media-amazon.com/images/I/61ppT+ncE6L.jpg" name="Gen-A1 Drive" stock="116+ varients"/>
          <CardList url="https://www.miamiherald.com/reviews/wp-content/uploads/2023/08/FineDine-Water-Bottle-with-Straw.png" name="Glazzy Bottle" stock="24+ varients"/>
          <CardList url="https://contents.mediadecathlon.com/p754503/fbcee8b31f4e88a93c4271156a2fb9dc/p754503.jpg" name="Donon Bag A2" stock="189+ varients"/>
          <CardList url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-V2C2h25kfvblwWDkEhn0adZfntcerKwvpriWfSV2nh9pnvf7lwJ4z-vA_56iSncIvk&usqp=CAU" name="Zincoin Socket HGU" stock="189+ varients"/>
        </Box>
    </Box>
  )
}

export default BoxCard