import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, Link, useColorModeValue } from "@chakra-ui/react";

function SobreNosotros() {
  const linkColor = useColorModeValue("blue.500", "blue.200");

  return (
    <Box
      flexDirection="column"
      alignItems="center"    
      display="flex" 
      fontFamily="Comic Sans MS"
      padding="20px"
      borderWidth="2px"
      borderRadius="3xl"
      borderColor="orange" 
    >
      <Box      
        padding="20px"
        width="100%"
        textAlign="center"
      >
        <Heading 
          fontSize="24px"
          fontFamily="Comic Sans MS"
          marginBottom="20px"
        >
          Sobre Nosotros
        </Heading>
        <Text 
          fontSize="16px" 
          marginBottom="10px" 
          textAlign="justify"
        >
          ¡Hola! Bienvenido a nuestra aplicación "Tareas del día". Estamos aquí para ayudarte. Nuestro objetivo es hacer que tu vida sea más fácil y organizada. Aquí tienes un vistazo a las características que te ofrecemos:
        </Text>
        <UnorderedList 
          fontSize="16px" 
          marginBottom="10px" 
          textAlign="justify"
        >
          <ListItem>Te colaboramos para organizar tu día de una manera más simple, fácil y sencilla.</ListItem>
          <ListItem>Te ayudamos a mantener las tareas ordenadas para llevar tu propio control.</ListItem>
          <ListItem>Diseñamos nuestra aplicación para ser fácil de entender y de usar. No importa si eres un experto en tecnología o un principiante, ¡te sentirás cómodo usándola!</ListItem>
        </UnorderedList>
        <Heading 
          fontSize="24px"
          fontFamily="Comic Sans MS"
          marginBottom="20px"
          marginTop="20px"
        >
          Contáctanos
        </Heading>
        <Text
          fontSize="16px" 
          marginBottom="10px" 
          textAlign="justify"
        >
          Estamos aquí para ayudarte. Si tienes preguntas, comentarios o sugerencias, no dudes en ponerte en contacto con nosotros mandándonos un correo a <Link href="mailto:eldyarely@gmail.com" color={linkColor}>eldyarely@gmail.com</Link>. Tu opinión es importante para nosotros y nos esforzamos por mejorar constantemente nuestra aplicación.
        </Text>
        <Text
          fontSize="16px" 
          marginBottom="10px" 
          textAlign="justify"
        >
          Gracias por elegir "Mis tareas del día" como tu compañero de organización. ¡Esperamos que disfrutes usando nuestra aplicación tanto como nosotros disfrutamos creándola!
        </Text>
      </Box>
    </Box>
  );
}

export default SobreNosotros;



