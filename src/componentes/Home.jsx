import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    
      <Box
      color="black"
      backgroundColor="#FBD38D"
      flexDirection="column"
      alignItems="center"    
      display="flex" 
      fontFamily="Comic Sans MS"
      padding="20px"
      borderWidth="2px"
      borderRadius="3xl"
      borderColor="orange" 
      >
        <Heading
        
          fontSize="24px"
          fontFamily="Comic Sans MS"
          marginBottom="20px"
        >
          Bienvenido a nuestra aplicación
        </Heading>
        <Text 
        fontSize="16px" 
        marginBottom="10px" 
        textAlign="justify">
          ¿Estás cansado de olvidar tareas importantes?, ¿Sentirte abrumado por la cantidad de cosas por hacer en tu vida diaria?, ¿Incumplir las cosas que debes entregar o realizar porque lo olvidaste?, ¿Tener miedo de no completar ciertas actividades?
        </Text>
        <Text 
        fontSize="16px" 
        marginBottom="20px" 
        textAlign="justify">
          Entonces ¡No busques más! "Mis tareas del día" es tu solución, es una aplicación que te ayudará a mantener todo organizado, simple y bajo control.
        </Text>
        <Heading
          fontSize="24px"
          fontFamily="Comic Sans MS"
          marginBottom="20px"
          marhinTop="20px"
        >
          ¿Por qué elegir "Mis tareas del día"?
        </Heading>
        <Text
        fontSize="16px" 
        marginBottom="10px" 
        textAlign="justify">

Nuestra aplicación está diseñada para ser simple y fácil de usar. Olvídate de las interfaces complicadas y las curvas de aprendizaje. Con "Tareas del día", podrás comenzar a ser más productivo desde el primer momento.</Text>
<Text
fontSize="16px" 
marginBottom="10px" 
textAlign="justify"
marginTop="20px">
No permitas que las tareas se acumulen y el estrés se apodere de tu vida. Descarga "Tareas del día" ahora y recupera el control sobre tu tiempo y tus responsabilidades.</Text>
      </Box>

  );
}

export default Home;


