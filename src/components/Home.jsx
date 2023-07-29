import React from 'react'
import { Box, } from '@chakra-ui/react'
import img3 from "../assets/3.png"
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
        <Box
        position="relative"
        display="inline-block"
        height="90%"
        width="100%"
        overflow="hidden"
        backgroundColor={'black'}
        
      >
        <img
          src={img3}
          alt="Responsive Img"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
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
        <Box
          position="absolute"
          top="30%"
          left="50%"
          transform="translate(-20%, -50%)"
          color={"whitesmoke"}
          p="4"
          borderRadius="md"
          fontSize={"6xl"}
          fontFamily={"monospace"}
        >
        <Typewriter
          options={{
            strings: ['Welcome to My Portfolio', 'I am a Web Developer', 'Graphic Designer', 'UI/UX Designer'],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>
        
      </Box>
      
  )
}

export default Home