import React from "react";
import { Flex, Heading, Button, Stack, Box, useColorMode, IconButton, Img } from "@chakra-ui/react";
import portada from '../images/portada.jpg';
import Titulo from '../images/Titulo.png';
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";


const Header = () => {

const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Box bg="red.200" w="100%">
      
      <Flex
        fontFamily="Comic Sans MS, cursive" 
        as="header"
        bg="blue.500"
        
        h="400px" 
        color="white"
        bgImage={portada}
        bgSize="cover"
        align="center"
        justify="center"
        flexDirection="column"
        alignContent="center"
        mt="-50px" 
        position="relative"
      >
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          position="absolute"
          top="40px"
          right="20px"
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme="white"
        />
        <Heading
          color="black" 
          fontWeight="bold"  
          fontFamily="Comic Sans MS, cursive"
          mt="50px"
          marginBottom="-11rem"
          width='450px'
         >
          <Img src={Titulo}></Img>
        </Heading>
        <Stack direction="row" spacing={4} mt="4">
          
          <Button
            colorScheme="orange"
            width="100px"
            color="black"
            size="sm"
            variant="solid"
            as={Link}
            to="/"
            borderWidth="2px"
            borderRadius="full"
            borderColor="#9C4221"
          >
            Inicio
          </Button>
          <Button
            colorScheme="orange"
            width="180px"
            color="black"
            size="sm"
            variant="solid"
            as={Link}
            to="/SobreNosotros"
            borderWidth="2px"
            borderRadius="full"
            borderColor="#9C4221"
          >
            Conócenos
          </Button>
          <Button
            colorScheme="orange"
            variant="solid"
            width="100px"
            color="black"
            size="sm"
            
            as={Link}
            to="/Tareas"
            borderWidth="2px"
            borderRadius="full"
            borderColor="#9C4221"
          >
            Tareas
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;