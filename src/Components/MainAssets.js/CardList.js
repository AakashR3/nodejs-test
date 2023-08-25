import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardList = (props) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: "30px", maxWidth:"300px", marginTop: "30px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', "&:hover":{backgroundColor:"#fdd336"} }}>
        <CardContent>
          <Typography component="div" variant="h5" color={"#3d464d"} fontWeight={"bold"}>
          Sports Shoes
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div"  fontWeight={"bold"} fontStyle={"italic"} marginTop={"15px"}>
            100+ Varients
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150}}
        
        image={props.url}
        alt="Shoes"
      />
    </Card>
  )
}

export default CardList