
import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'

const RSBar = () => {
  const [showButton, setShowButton] = useState(false);
  return (
      
    <Stack  
        paddingTop={1.5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1.7} 
        sx={{backgroundColor: "#ededed"}}
       
    >
  
  <img  style={{height: "276px", width: "333px"}} src='https://image.made-in-china.com/2f0j00iLbqIEVosPct/ABC-Kids-Fashion-Design-Organic-Cotton-Baby-Dresses-Girls-1st-Birthday-Dress-for-Baby-Girl.webp' alt='Tshirt'/>
  {/* <img  style={{height: "273px", width: "333px"}} src='https://down-ph.img.susercontent.com/file/d3f5bbb56a3559fa6efd578bf3501b05' alt='Tshirt'/> */}
  <div
      style={{
        position: 'relative',
        width: '333px',
        height: '273px',
      }}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <img
        style={{ width: '100%', height: '100%' }}
        src='https://down-ph.img.susercontent.com/file/d3f5bbb56a3559fa6efd578bf3501b05'
        alt='Tshirt'
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: '24px',
          opacity: showButton ? 0 : 1,
          transition: 'opacity 0.3s',
          fontFamily: "monospace"
        }}
      >
        25% Offer for Womens
      </div>
      {showButton && (
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Add Cart
        </button>
      )}
    </div>
</Stack>
 
  )
}

export default RSBar