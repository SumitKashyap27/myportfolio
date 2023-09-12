import React from 'react';
import { Grid, Box, Image, Text, Input, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={{ base: 4, md: 8 }}
      alignItems="center"
      justifyContent="center"
      height="80vh"
      p={{ base: 9, md: 29 }}
      
    >
      {/* Left Side */}
      <Box
      id='contact'
      bgColor={''}
      p={50}
      >
        <Text mb={4}>
          Get In Touch
        </Text>
        <Text fontSize={{ base: '6xl', md: '7xl' }} fontWeight="bold" mb={4}>
          Contact.
        </Text>
        <Text pb={3}>
            Your Name
        </Text>
        <Input
          placeholder="Your Name"
          variant="filled"
          mb={4}
          size="lg"
          focusBorderColor="teal.500"
        />
        <Text pb={3}>
            Your Email
        </Text>
        <Input
          placeholder="Your Email"
          variant="filled"
          mb={4}
          size="lg"
          focusBorderColor="teal.500"
        />
        <Text pb={3}>
            Any Message
        </Text>
        <Input
          placeholder="Your Message"
          variant="filled"
          mb={4}
          size="lg"
          focusBorderColor="teal.500"
          multiline
          rows={6}
        />
        <Button colorScheme="teal" size="lg">
          Send Message
        </Button>
      </Box>

      {/* Right Side (Image) */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Image
          src="your-image-url.jpg"
          alt="Contact Image"
          borderRadius="lg"
          boxShadow="lg"
          maxH="400px"
        />
      </Box>
    </Grid>
  );
};

export default Contact;
