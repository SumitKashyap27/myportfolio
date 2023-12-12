import {
  Container,
  Heading,
  Text,
  Stack,
  Card,
  Flex,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container maxW={'fit-content'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          fontSize={'7xl'}
          color={'whiteAlpha.900'}
          py="5"
          paddingBottom={55}
        >
          My Top Skills
        </Heading>

        <Stack
          h={'full'}
          p={'2'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Text
            letterSpacing={'widest'}
            lineHeight={'170%'}
            p={['4', '0']}
            color={'grey'}
          >
            I'm a skilled Front-end Developer and Web Designer, proficient in
            JavaScript and ReactJS, with a flair for SCSS. My design expertise
            shines through with Figma and Adobe Illustrator, where I craft
            captivating interfaces. Additionally, I love to work on
            illustrations, using Adobe Illustrator to create unique art. I'm
            also adept at image editing with Pixlr. Passionate about web
            development, I strive to deliver top-notch, user-friendly websites
            that exceed modern standards. I'm dedicated to pushing boundaries,
            embracing new technologies, and creating impactful solutions.
          </Text>
        </Stack>
      </Container>
      <Flex justifyContent="center" minH="30vh">
        <Box
          maxW={{
            base: 'container.sm',
            md: 'container.md',
            lg: 'container.xl',
          }}
          p={16}
        >
          <SimpleGrid
            spacing={{ base: 6, md: 9 }}
            align="center"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(6, 1fr)',
            }}
          >
            <Card
              variant="elevated"
              position="relative"
              transformStyle="preserve-3d"
              transform="perspective(1000px)"
              transition="transform 0.3s"
              bg="gray.200"
              borderRadius="50%"
              boxShadow="0 0 20px rgba(255, 255, 255, 0.6)"
              onMouseMove={e => {
                const card = e.currentTarget;
                const { left, top, width, height } =
                  card.getBoundingClientRect();
                const x = (e.pageX - left - width / 2) / width;
                const y = (e.pageY - top - height / 2) / height;
                const rotationValue = 2;
                card.style.transform = `perspective(1000px) rotateY(${
                  x * rotationValue
                }deg) rotateX(${
                  y * -rotationValue
                }deg) translateZ(1px) scale(1.25)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform =
                  'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
              }}
              style={{
                width: '125px',
                height: '125px',
              }}
            ></Card>
            <Card
              variant="elevated"
              position="relative"
              transformStyle="preserve-3d"
              transform="perspective(1000px)"
              transition="transform 0.3s"
              bg="gray.200"
              borderRadius="50%"
              boxShadow="0 0 20px rgba(255, 255, 255, 0.6)" // Darken and lift the shadow for depth
              onMouseMove={e => {
                const card = e.currentTarget;
                const { left, top, width, height } =
                  card.getBoundingClientRect();
                const x = (e.pageX - left - width / 2) / width;
                const y = (e.pageY - top - height / 2) / height;
                const rotationValue = 2; // Increased the rotation for a stronger 3D effect
                card.style.transform = `perspective(1000px) rotateY(${
                  x * rotationValue
                }deg) rotateX(${
                  y * -rotationValue
                }deg) translateZ(1px) scale(1.25)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform =
                  'perspective(1000px) rotateY(0) rotateX(0) translateZ(0) scale(1)';
              }}
              style={{
                width: '125px',
                height: '125px',
              }}
            ></Card>
            <Card
              variant="elevated"
              position="relative"
              transformStyle="preserve-3d"
              transform="perspective(1000px)"
              transition="transform 0.3s"
              bg="gray.200"
              borderRadius="50%"
              boxShadow="0 0 20px rgba(255, 255, 255, 0.6)"
              onMouseMove={e => {
                const card = e.currentTarget;
                const { left, top, width, height } =
                  card.getBoundingClientRect();
                const x = (e.pageX - left - width / 2) / width;
                const y = (e.pageY - top - height / 2) / height;
                const rotationValue = 2; // Increased the rotation for a stronger 3D effect
                card.style.transform = `perspective(1000px) rotateY(${
                  x * rotationValue
                }deg) rotateX(${
                  y * -rotationValue
                }deg) translateZ(1px) scale(1.25)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform =
                  'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
              }}
              style={{
                width: '125px',
                height: '125px',
              }}
            ></Card>
            <Card
              variant="elevated"
              position="relative"
              transformStyle="preserve-3d"
              transform="perspective(1000px)"
              transition="transform 0.3s"
              bg="gray.200"
              borderRadius="50%"
              boxShadow="0 0 20px rgba(255, 255, 255, 0.6)"
              onMouseMove={e => {
                const card = e.currentTarget;
                const { left, top, width, height } =
                  card.getBoundingClientRect();
                const x = (e.pageX - left - width / 2) / width;
                const y = (e.pageY - top - height / 2) / height;
                const rotationValue = 2; // Increased the rotation for a stronger 3D effect
                card.style.transform = `perspective(1000px) rotateY(${
                  x * rotationValue
                }deg) rotateX(${
                  y * -rotationValue
                }deg) translateZ(1px) scale(1.25)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform =
                  'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
              }}
              style={{
                width: '125px',
                height: '125px',
              }}
            ></Card>
            <Card
              variant="elevated"
              position="relative"
              transformStyle="preserve-3d"
              transform="perspective(1000px)"
              transition="transform 0.3s"
              bg="gray.200"
              borderRadius="50%"
              boxShadow="0 0 20px rgba(255, 255, 255, 0.6)"
              onMouseMove={e => {
                const card = e.currentTarget;
                const { left, top, width, height } =
                  card.getBoundingClientRect();
                const x = (e.pageX - left - width / 2) / width;
                const y = (e.pageY - top - height / 2) / height;
                const rotationValue = 2; // Increased the rotation for a stronger 3D effect
                card.style.transform = `perspective(1000px) rotateY(${
                  x * rotationValue
                }deg) rotateX(${
                  y * -rotationValue
                }deg) translateZ(1px) scale(1.25)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform =
                  'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
              }}
              style={{
                width: '125px',
                height: '125px',
              }}
            ></Card>
            <Card
              variant="elevated"
              position="relative"
              transformStyle="preserve-3d"
              transform="perspective(1000px)"
              transition="transform 0.3s"
              bg="gray.200"
              borderRadius="50%"
              boxShadow="0 0 20px rgba(255, 255, 255, 0.6)"
              onMouseMove={e => {
                const card = e.currentTarget;
                const { left, top, width, height } =
                  card.getBoundingClientRect();
                const x = (e.pageX - left - width / 2) / width;
                const y = (e.pageY - top - height / 2) / height;
                const rotationValue = 2; // Increased the rotation for a stronger 3D effect
                card.style.transform = `perspective(1000px) rotateY(${
                  x * rotationValue
                }deg) rotateX(${
                  y * -rotationValue
                }deg) translateZ(1px) scale(1.25)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform =
                  'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
              }}
              style={{
                width: '125px',
                height: '125px',
              }}
            ></Card>
          </SimpleGrid>
        </Box>
      </Flex>
    </section>
  );
};

export default Skills;
