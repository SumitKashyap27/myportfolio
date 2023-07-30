import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    
    <HStack p={"4"} shadow={"base"} spacing={"20"} bgColor={"blackAlpha.900"} >
      <Button variant={"ghost"} style={{  color: 'white' }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'black';
            e.currentTarget.style.borderColor = 'black';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'white';
          }} >
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"ghost"} style={{  color: 'white' }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'black';
            e.currentTarget.style.borderColor = 'black';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'white';
          }}>
        <Link to="/Overview">Overview</Link>
      </Button>

      <Button variant={"ghost"} style={{  color: 'white' }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'black';
            e.currentTarget.style.borderColor = 'black';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'white';
          }}>
        <Link to="/Services">Services</Link>
      </Button>

    </HStack>
    
  );
};

export default Header;