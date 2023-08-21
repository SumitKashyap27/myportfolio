import React from 'react'
import img from '../assets/atom.png';
import img1 from '../assets/code.png';
import img2 from '../assets/designer.png';
import img3 from '../assets/javascript.png';
import { Flex, Box, Container, Heading, Stack, Text, Card, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react';

const Overview = () => {
  return (
    <Box 
    position="relative"
        display="inline-block"
        width="100%"
        overflow="hidden"
        backgroundColor={'black'}
        mb={0}
        pb={0}
        id='overview'>

    <Container maxW={'fit-content'} p={'16'}>
        <Heading textTransform={'uppercase'}
        fontSize={"xl"}
        py='2'
        color={'grey'}
        >
        Introduction
        </Heading>
        <Heading 
        textTransform={'uppercase'}
        fontSize={"7xl"}
        color={"whiteAlpha.900"}
        py='5'
        >
          Overview.
        </Heading>

        <Stack
        h={'full'}
        p={'2'}
        alignItems={'center'}
        direction={['column','row']}
        >
        <Text  letterSpacing={'widest'} lineHeight={"170%"} p={["4","0"]} color={'grey'}>
        I'm a skilled Front-end Developer and Web Designer, proficient in JavaScript and ReactJS, with a flair for SCSS. 
        My design expertise shines through with Figma and Adobe Illustrator, where I craft captivating interfaces. Additionally,
        I love to work on illustrations, using Adobe Illustrator to create unique art. I'm also adept at image editing with Pixlr.
        Passionate about web development, I strive to deliver top-notch, user-friendly websites that exceed modern standards. 
        I'm dedicated to pushing boundaries, embracing new technologies, and creating impactful solutions. 
        </Text>
        </Stack>
    </Container>
    <Flex justifyContent="center" minH="30vh">
  <Box maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }} p={16}>
    <SimpleGrid
      spacing={{ base: 6, md: 9 }}
      align="center"
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
    >
          <Card variant="elevated"
          position="relative"
          transformStyle="preserve-3d"
          transform="perspective(1000px)"
          transition="transform 0.3s"
          bg="gray.900" 
          borderRadius="lg"
          boxShadow="0 0 50px rgba(255, 255, 255, 0.6)"
          onMouseMove={(e) => {
        const card = e.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.pageX - left - width / 2) / width;
        const y = (e.pageY - top - height / 2) / height;
        const rotationValue = 5;
        card.style.transform = `perspective(1000px) rotateY(${x * rotationValue}deg) rotateX(${y * -rotationValue}deg) scale(1.05)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
      }}
      style={{
        width: "225px",
        height: "275px", 
      }}>
          <img
          src={img}
          alt="Web Development Icon"
          style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px", 
          height: "100px", 
          }}
          />
            <CardHeader>
              <Heading size="md">React JS</Heading>
            </CardHeader>
            <CardFooter>
            </CardFooter>
          </Card>
          <Card variant="elevated"
          position="relative"
          transformStyle="preserve-3d"
          transform="perspective(1000px)"
          transition="transform 0.3s"
          bg="gray.900" 
          borderRadius="lg"
          boxShadow="0 0 50px rgba(255, 255, 255, 0.6)"
          onMouseMove={(e) => {
        const card = e.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.pageX - left - width / 2) / width;
        const y = (e.pageY - top - height / 2) / height;
        const rotationValue = 5;
        card.style.transform = `perspective(1000px) rotateY(${x * rotationValue}deg) rotateX(${y * -rotationValue}deg) scale(1.05)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
      }}
      style={{
        width: "225px",
        height: "275px", 
      }}>
        <img
          src={img2}
          alt="UI/UX Icon"
          style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px", 
          height: "100px", 
          }}
          />
      <CardHeader>
        <Heading size="md">UI/UX</Heading>
      </CardHeader>
      <CardBody>
        
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
        <Card variant="elevated"
          position="relative"
          transformStyle="preserve-3d"
          transform="perspective(1000px)"
          transition="transform 0.3s"
          bg="gray.900" 
          borderRadius="lg"
          boxShadow="0 0 50px rgba(255, 255, 255, 0.6)"
          onMouseMove={(e) => {
        const card = e.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.pageX - left - width / 2) / width;
        const y = (e.pageY - top - height / 2) / height;
        const rotationValue = 5;
        card.style.transform = `perspective(1000px) rotateY(${x * rotationValue}deg) rotateX(${y * -rotationValue}deg) scale(1.05)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
      }}
      
      style={{
        width: "225px",
        height: "275px", 
      }}>
        <img
          src={img1}
          alt="code icon "
          style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px", 
          height: "100px", 
        }}
      />
            <CardHeader>
              <Heading size="md">HTML5/CSS3</Heading>
            </CardHeader>
            <CardFooter>
            </CardFooter>
          </Card>
          <Card variant="elevated"
          position="relative"
          transformStyle="preserve-3d"
          transform="perspective(1000px)"
          transition="transform 0.3s"
          bg="gray.900" 
          borderRadius="lg"
          boxShadow="0 0 50px rgba(255, 255, 255, 0.6)"
          onMouseMove={(e) => {
        const card = e.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.pageX - left - width / 2) / width;
        const y = (e.pageY - top - height / 2) / height;
        const rotationValue = 5;
        card.style.transform = `perspective(1000px) rotateY(${x * rotationValue}deg) rotateX(${y * -rotationValue}deg) scale(1.05)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
      }}
      style={{
        width: "225px", 
        height: "275px", 
      }}>
          <img
          src={img3}
          alt="Web Development Icon"
          style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px", 
          height: "100px", 
          }}
          />
            <CardHeader>
              <Heading size="md">JavaScript</Heading>
            </CardHeader>
            <CardBody>
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </Flex>

        </Box>
  )
}

export default Overview