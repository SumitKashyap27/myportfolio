import React from "react";
import { useState,useEffect } from 'react';
import {
  HStack,
  Button,
  Link,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showHamburger, setShowHamburger] = useState(true);


  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowHamburger(false);
    } else {
      setShowHamburger(true);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <HStack
        p="4"
        shadow="base"
        spacing="20"
        bgColor="blackAlpha.900"
        justify="space-between"
      >
        <div bold>
          <Link to="/" style={{ color: 'white' }}>
            SUMIT KASHYAP
          </Link>
        </div>

        <div>
          {!showHamburger ? (
            <>
              <Button
                variant="ghost"
                style={{ color: 'white' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.borderColor = 'black';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <Link to="/">Home</Link>
              </Button>

              <Button
                variant="ghost"
                style={{ color: 'white' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.borderColor = 'black';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <Link to="/Overview">Overview</Link>
              </Button>

              <Button
                variant="ghost"
                style={{ color: 'white' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.borderColor = 'black';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <Link to="/Services">Services</Link>
              </Button>

              <Button
                variant="ghost"
                border="2px"
                borderColor="red.200"
                borderRadius={20}
                style={{ color: 'white' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'red';
                  e.currentTarget.style.borderColor = 'red';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <Link to="/Resume">Resume</Link>
              </Button>
            </>
          ) : (
            // Mobile view: Show hamburger icon
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Menu"
              variant="ghost"
              color="white"
              onClick={onOpen}
            />
          )}
        </div>
      </HStack>

      
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} align="right">
              <Button
                variant="ghost"
                style={{ color: 'black' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.borderColor = 'black';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <Link to="/">Home</Link>
              </Button>

              <Button
                variant="ghost"
                style={{ color: 'black' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.borderColor = 'black';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <Link to="/Overview">Overview</Link>
              </Button>

              <Button
                variant="ghost"
                style={{ color: 'black' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.borderColor = 'black';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <Link to="/Services">Services</Link>
              </Button>

              <Button
                variant="ghost"
                border="2px"
                borderColor="red.200"
                borderRadius={20}
                style={{ color: 'red' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'red';
                  e.currentTarget.style.borderColor = 'red';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <Link to="/Resume">Resume</Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
