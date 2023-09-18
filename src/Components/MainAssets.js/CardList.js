import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardList = ({ url, name, stock }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: "30px", maxWidth:"320px", marginTop: "30px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', "&:hover":{backgroundColor:"#fdd336"} }}>
        <CardContent>
          <Typography component="div" variant="h5" color={"#3d464d"} fontWeight={"bold"}>
          {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div"  fontWeight={"bold"} fontStyle={"italic"} marginTop={"15px"}>
            {stock}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150,
           transition: 'transform 0.2s', // Adding a transition for a smooth effect
            '&:hover': {
          transform: 'scale(1.1)', // Scale the image up on hover
        },}}
        image={url}
        alt="Products"
        
      />
    </Card>
  )
}

export default CardList