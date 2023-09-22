
import { Box, Button, Divider } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';


const images = [
  'https://assets.mspimages.in/gear/wp-content/uploads/2019/05/Flipkart-Big-Shopping-Days-Sale-May-15-2019.jpg',
  'https://media.thebodyshop.in/media/logo/image/HPC_DP-1_1.jpg',
  'https://img.freepik.com/free-vector/flat-travel-exploration-social-media-cover-template_23-2150002059.jpg?w=2000',
  'https://img.freepik.com/free-vector/flat-design-international-school-sale-banner-template_23-2150665767.jpg?w=2000',
  // Add more image URLs here
];

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const slideshowTimer = setInterval(nextImage, 3000);

    return () => {
      clearInterval(slideshowTimer);
    };
  }, []);


  return (
    <Box
    paddingTop={1.5}
    flex={2}
    sx={{ backgroundColor: '#ededed', position: 'relative' }}
  >
    <img
      ref={imageRef}
      style={{ height: '565px', width: '100%', objectFit: 'cover' }}
      src={images[currentImageIndex]}
      alt='Slideshow'
    />
  
  </Box>
      
  )
}

export default Main