import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from "@mui/material";


const Productlistdesign = ({url, name, stock}) => {
  return (
    <>
      <Box >
      <Card >
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {stock}
          </Typography>
        </CardContent>
    
        <CardActions>
          <Button size="small">Sale</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Box>
    </>
  );
};

export default Productlistdesign;