import React from 'react';
import { Box, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import styled from 'styled-components';

const Card = styled(Box)`
  position: relative;
  width: 200px;
  height: 300px;
  margin: 0 auto;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
`;

const Face = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackFace = styled(Face)`
  box-sizing: border-box;
  padding: 20px;
`;

const Desc = styled.p`
  background-color: #eee;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FrontFace = styled(Face)`
  transition: 0.5s;

  b {
    margin: 0;
    padding: 0;
    font-size: 4.9em;
    color: #fff;
    transition: 0.5s;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;

const HoverCard = styled(Card)`
  &:hover ${FrontFace} {
    height: 60px;
    b {
      font-size: 2em;
    }
  }
`;

const FrontFaceBackground = styled(FrontFace)`
  background-color: #0cbaba;
  border-radius: 15px;
`;

const Projects = () => {
  return (
    <section>
      <Container maxW={'fit-content'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          fontSize={'7xl'}
          color={'whiteAlpha.900'}
          textAlign={'center'}
          paddingBottom={55}
        >
          Projects
        </Heading>

        <Flex justifyContent="center" minH="30vh">
          <SimpleGrid
            spacing={{ base: 6, md: 9 }}
            align="center"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
          >
            <HoverCard>
              <BackFace>
                <div className="content">
                  <span className="stars"></span>
                  <b className="desc">Hello</b>
                  <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Desc>
                </div>
              </BackFace>
              <FrontFaceBackground>
                <b>Hover</b>
              </FrontFaceBackground>
            </HoverCard>
            <HoverCard>
              <BackFace>
                <div className="content">
                  <span className="stars"></span>
                  <b className="desc">Hello</b>
                  <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Desc>
                </div>
              </BackFace>
              <FrontFaceBackground>
                <b>Hover</b>
              </FrontFaceBackground>
            </HoverCard>
            <HoverCard>
              <BackFace>
                <div className="content">
                  <span className="stars"></span>
                  <b className="desc">Hello</b>
                  <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Desc>
                </div>
              </BackFace>
              <FrontFaceBackground>
                <b>Hover</b>
              </FrontFaceBackground>
            </HoverCard>
            <HoverCard>
              <BackFace>
                <div className="content">
                  <span className="stars"></span>
                  <b className="desc">Hello</b>
                  <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Desc>
                </div>
              </BackFace>
              <FrontFaceBackground>
                <b>Hover</b>
              </FrontFaceBackground>
            </HoverCard>
            <HoverCard>
              <BackFace>
                <div className="content">
                  <span className="stars"></span>
                  <b className="desc">Hello</b>
                  <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Desc>
                </div>
              </BackFace>
              <FrontFaceBackground>
                <b>Hover</b>
              </FrontFaceBackground>
            </HoverCard>
            <HoverCard>
              <BackFace>
                <div className="content">
                  <span className="stars"></span>
                  <b className="desc">Hello</b>
                  <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Desc>
                </div>
              </BackFace>
              <FrontFaceBackground>
                <b>Hover</b>
              </FrontFaceBackground>
            </HoverCard>
            <HoverCard>
              <BackFace>
                <div className="content">
                  <span className="stars"></span>
                  <b className="desc">Hello</b>
                  <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Desc>
                </div>
              </BackFace>
              <FrontFaceBackground>
                <b>Hover</b>
              </FrontFaceBackground>
            </HoverCard>
            <HoverCard>
              <BackFace>
                <div className="content">
                  <span className="stars"></span>
                  <b className="desc">Hello</b>
                  <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Desc>
                </div>
              </BackFace>
              <FrontFaceBackground>
                <b>Hover</b>
              </FrontFaceBackground>
            </HoverCard>
          </SimpleGrid>
        </Flex>
      </Container>
    </section>
  );
};

export default Projects;
