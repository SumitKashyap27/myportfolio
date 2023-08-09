import { Box, Button, Flex, Heading, IconButton, Link as ChakraLink, Stack, useDisclosure } from "@chakra-ui/react";
import { HashLink as ReactRouterHashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box); // Wrap Box with motion

function Header() {
  const { isOpen, onToggle } = useDisclosure();

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box as="nav" backgroundColor="blackAlpha.900" color="white" py={4} position="sticky" top={0} zIndex={999}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading as="h1" fontSize={["xl", "2xl"]} fontWeight="bold" letterSpacing="wide">
          Sumit Kashyap
        </Heading>
        <IconButton
          icon={isOpen ? <FaTimes /> : <FaBars />}
          colorScheme="white"
          variant="ghost"
          onClick={onToggle}
          display={{ base: "block", md: "none" }}
          aria-label="Toggle navigation menu"
        />
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
          spacing={{ base: 4, md: 6 }}
        >
          <MotionBox
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <ReactRouterHashLink smooth to="/#home" _hover={{ textDecoration: "underline", color: "white" }}>
              Home
            </ReactRouterHashLink>
          </MotionBox>
          <MotionBox
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <ReactRouterHashLink smooth to="/#contact" as={ChakraLink} _hover={{ textDecoration: "underline", color: "teal.300" }}>
              Contact
            </ReactRouterHashLink>
          </MotionBox>
          <MotionBox
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <ReactRouterHashLink smooth to="/#overview" _hover={{ textDecoration: "underline", color: "teal.300" }}>
              Overview
            </ReactRouterHashLink>
          </MotionBox>
          <MotionBox
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <Button
              as="a"
              href="/path/to/your/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              colorScheme="red"
            >
              Download Resume
            </Button>
          </MotionBox>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Header;
