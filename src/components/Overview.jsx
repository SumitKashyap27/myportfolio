import React from 'react'
import img from '../assets/physics-unscreen.gif';
import { Flex, Box, Container, Heading, Stack, Text, Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid } from '@chakra-ui/react';

const Overview = () => {
  return (
    <Box 
    position="relative"
        display="inline-block"
        width="100%"
        overflow="hidden"
        backgroundColor={'black'}
        mb={0}
        pb={0}>

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
          bg="gray.200" 
          borderRadius="lg"
          boxShadow="0 0 100px rgba(255, 255, 255, 0.6)"
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
              <Heading size="md">Customer dashboard</Heading>
            </CardHeader>
            <CardFooter>
            </CardFooter>
          </Card>
          <Card variant="elevated"
          position="relative"
          transformStyle="preserve-3d"
          transform="perspective(1000px)"
          transition="transform 0.3s"
          bg="gray.200" 
          borderRadius="lg"
          boxShadow="0 0 100px rgba(255, 255, 255, 0.6)"
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
      <CardHeader>
        <Heading size="md">Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
        <Card variant="elevated"
          position="relative"
          transformStyle="preserve-3d"
          transform="perspective(1000px)"
          transition="transform 0.3s"
          bg="gray.200" 
          borderRadius="lg"
          boxShadow="0 0 100px rgba(255, 255, 255, 0.6)"
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
            <CardHeader>
              <Heading size="md">Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card variant="elevated"
          position="relative"
          transformStyle="preserve-3d"
          transform="perspective(1000px)"
          transition="transform 0.3s"
          bg="gray.200" 
          borderRadius="lg"
          boxShadow="0 0 100px rgba(255, 255, 255, 0.6)"
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
            <CardHeader>
              <Heading size="md">Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </Flex>

        </Box>
  )
}

export default Overview;