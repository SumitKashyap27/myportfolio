import React from 'react'
import { Box } from '@chakra-ui/react'
import img1 from "../assets/1.png"

const Home = () => {
  return (
        <Box
        position="relative"
        display="inline-block"
        height="70%"
        width="100%"
        overflow="hidden"
      >
        <img
          src={img1}
          alt="Responsive Img"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            filter: 'grayscale(1) brightness(0.7)', // Combining greyscale and brightness
          }}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="black"
          opacity="0.5" // You can adjust the opacity level here (0.5 = 50%)
        />
      </Box>
  )
}

export default Home