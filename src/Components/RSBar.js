
import { Box, Stack } from '@mui/material'
import React from 'react'

const RSBar = () => {
  return (
      
    <Stack  
        paddingTop={1.5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1.7} 
        sx={{backgroundColor: "#ededed"}}
       
    >
  
  <img  style={{height: "273px", width: "440px"}} src='https://assets.ajio.com/medias/sys_master/root/20230519/u500/64677c2b42f9e729d79c0c05/-288Wx360H-466168870-red-MODEL.jpg' alt='Tshirt'/>
  <img  style={{height: "273px", width: "440px"}} src='https://www.fashionbeans.com/wp-content/uploads/2023/02/lucafaloni_manleaningagaintsacar-696x422.jpg' alt='Tshirt'/>

</Stack>
 
  )
}

export default RSBar