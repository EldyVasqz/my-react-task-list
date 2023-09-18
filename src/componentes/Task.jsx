import { useState, useEffect } from 'react';
import { HiPencil } from 'react-icons/hi';
import { FaTrashCan } from 'react-icons/fa6';
import { Box, Checkbox, Text, Button, Flex } from '@chakra-ui/react';

export default function Task({todos, descripcion, taskName, state, id, handleDeleteTask, handleUpdateTask, modifyState})
{

	//Cree un hook para controlar el estado de la lista de tareas en checkbox, le asigno el estado que esta en el arreglo original
	const[checkState, setcheckState]=useState(state)
//Cree una funcion para cambiar el estado de mi lista cuando marco el checkbox
	const checkChange=(status) => {
		let newState=!status
	
		setcheckState(newState)
		modifyState(id)
	}
	
//Cree el useEffect para que funcione cuando hago un cambio en el checkbox checkState
	 
  return (
    <Box
      marginBottom="2rem"
      borderWidth="2px"
      borderRadius="full"
      borderColor="orange"
      p="4"
      mb="4"
      boxShadow={checkState ? 'none' : 'md'} 
    >
      <Flex alignItems="center" justifyContent="space-between" marginLeft="20px">
  	<Checkbox
    
	  isChecked={checkState}
    onChange={()=>checkChange(checkState)}
    colorScheme="green"
    iconColor={checkState ? 'white' : 'green.500'}
    border="green"
  >
    <Text 
    textDecoration={checkState ? 'line-through' : 'none'} 
    fontFamily="Comic Sans MS">
      {taskName}
    </Text>
  </Checkbox>
		
{/* Cree los botones de modificar y eliminar */}
        <Flex 
        alignItems="center"
        >
    <Button
      onClick={() => handleUpdateTask(id, taskName, descripcion, checkState)}
      variant="solid"
      colorScheme="blue"
      size="sm"
      fontFamily="Comic Sans MS"
      leftIcon={<HiPencil />}
      mr="1rem" 
    >
      Editar
    </Button>
    <Button
      onClick={() => handleDeleteTask(id)}
      variant="solid"
      colorScheme="red"
      size="sm"
      mr="1rem" 
      fontFamily="Comic Sans MS"
      leftIcon={<FaTrashCan/>}
    >
      Eliminar
    </Button>
  </Flex>
</Flex>
      {descripcion && (
        <Text marginLeft="70px" mt="2" fontSize="sm"  fontFamily="Comic Sans MS">
          {descripcion}
        </Text>
      )}
    </Box>
  );
}
