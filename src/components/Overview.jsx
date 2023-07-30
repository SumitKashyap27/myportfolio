import React from 'react'
import { Box, Container, Heading, Stack, Text, Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid, Center,  } from '@chakra-ui/react';

const Overview = () => {
  return (
    <Box 
    position="relative"
        display="inline-block"
        height="90%"
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
    <Center minH="30vh">
      <Box maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }} p={16}>
        <SimpleGrid spacing={5} align="center" templateColumns="repeat(4, 1fr)">
          <Card variant={"elevated"}bgGradient={'linear(to-tr, #7928CA, #FF0080)'}>
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
          <Card variant={"elevated"}bgGradient={'linear(to-tr, #7928CA, #FF0080)'}>
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
          <Card variant={"elevated"}bgGradient={'linear(to-tr, #7928CA, #FF0080)'}>
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
          <Card variant={"elevated"}bgGradient={'linear(to-tr, #7928CA, #FF0080)'}>
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
    </Center>

        </Box>
  )
}

export default Overview