import Task from "./Task";
import { useState } from "react";
import { useTaskHandler } from "../hooks/useTaskHandler";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Button, Input, Box, Text, WrapItem, Wrap, VStack} from "@chakra-ui/react";
import { HiPlus } from 'react-icons/hi';

export default function TaskList() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  let storedTaskList=[]
    storedTaskList = JSON.parse(localStorage.getItem('taskList'));
     if (storedTaskList==null)
     {
storedTaskList=[]
     }   
//Agregue una variable de estado para guardar el id de cada tarea
    const [taskId, setTaskId] = useState(Date.now());
//Agregue una variable de estado para poder guardar la tarea
    const [task, setTask] = useState("");
//Agregue una variable de estado para poder guardar una descripcion de la tarea
    const [descripcion, setDescripcion] = useState("");
//Hago el llamado a la lista de tareas las funciones agregar, eliminar y modicicar de mi hook
    const [taskList, newTask, deleteTask, modifyState] = useTaskHandler(storedTaskList);
//Agregue una variable de estado para verificar el cambio de estado del checkbox
    const[checkState, setcheckState]=useState(false);
//Cree la variable error para establecer cual es el error a mostrar 
    const [error, setError]=useState("");

    const placeholderColor = useColorModeValue("gray.500", "gray.300");
// Cree la funcion de agregar tarea a la lista de tareas
    function handleNewTask () {
        if (task=="" || task.length<3)
        {
            setError("Caracteres insuficientes. La tarea debe tener mínimo 3 caracteres. Inténtelo nuevamente.");
        }
        else{

//Envio el valor del id, nombre de la tarea y descripcion, si se va a actualizar una tarea existente va mantener el mismo id para que se agregue en la misma posicion
            newTask(taskId, task, descripcion, checkState)
            setTaskId("")
            setTask("")
            setcheckState(false)
            setError("");
        } 
    }
// Cree la funcion de eliminar tarea de la lista de tareas
     function handleDeleteTask (taskId) {
        deleteTask(taskId)
    } 
// Cree la funcion de modificar tarea de la lista de tareas
     function handleUpdateTask (taskId, taskName, descripcion, state) {
     //Actualice las variables de ingresar tarea  
        setTaskId(taskId)
        setTask(taskName)
        setDescripcion(descripcion)
        setcheckState(state)
        deleteTask(taskId)       
    } 
  function renderTask(taskItem) {
    return (
      <Box 
        key={taskItem.id} 
        marginBottom="10px"
      >
        <VStack spacing="4">
          <Text>{taskItem.task}</Text>
        </VStack>
      </Box>
    );
  }
 
  return (
    
      <Box
      color="black"
      backgroundColor="#FBD38D" 
      width="100%"
      padding="20px"
>
        <form onSubmit={handleSubmit} >
        <Box 
        w="100%">
          <section>
            <Wrap spacing={2}>
              <WrapItem>

{/* Cree la caja de texto con el botón de crear, en el input de ingresar tareas por defecto en el value me va aparecer el nombre de la tarea a modificar */}
              <Input
                  borderWidth="2px"
                  borderColor="orange"
                  w="495px"
                  marginTop="20px"
                  marginLeft="20px"
                  marginBottom="20px"
                  fontFamily="Comic Sans MS, cursiva"
                  value={task}
                  placeholder="Mi tarea"
                  onChange={(event) => {
                    setTask(event.target.value);
                  }}
                  bg="white"
                  _placeholder={{
                   color: placeholderColor,
                  }} 
                ></Input>
              </WrapItem>
              <WrapItem>

{/* Cree el input para guardar la descripción de la tarea */}
              <Input
                  borderWidth="2px"
                  borderColor="orange"
                  w="430px"
                  marginTop="20px"
                  marginBottom="20px"
                  className="descripcion"
                  fontFamily="Comic Sans MS, cursiva"
                  value={descripcion}
                  placeholder="Apuntes"
                  onChange={(event) => {
                    setDescripcion(event.target.value);
                  }}
                  bg="white"
                  _placeholder={{
                   color: placeholderColor,
                  }}
                ></Input>
              </WrapItem>
              <WrapItem>
                <Button
                
                  marginTop="24px"
                  onClick={handleNewTask} 
                  variant="solid"
                  colorScheme="green"
                  size="sm"
                  fontFamily="Comic Sans MS, cursiva"
                  leftIcon={<HiPlus />}
                > 
                  Agregar
                </Button>
              </WrapItem>
            </Wrap>
            <Text

              alignItems="center"
              position="initial"
              right="1rem"
              fontFamily="Comic Sans MS, cursiva"
              fontSize="12"
              marginLeft="39"
              marginBottom="20px"
              color="red"
            >
              {error}
             </Text>
          </section>

  {/* Ordene la lista por id */}
  <Box >
{taskList
  .sort((x, y) => y.id - x.id)
  .map((todo, index) => (
    <div key={index}>
      <Task
        
        descripcion={todo.descripcion}
        taskName={todo.taskName}
        state={todo.state}
        id={todo.id}
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
        modifyState={modifyState}
      />
    </div>
  ))}


          </Box>
        </Box>
      </form>
      
      {taskList.length === 0 ? (
        <Box    
        
      flexDirection="reverse"
      right="0"
      borderBottomEndRadius={80}      
      padding="1rem"
      borderRadius="md"
      marginRight="1rem"
      marginBottom="1rem"
    >
        <Text
        fontSize="14px"
        fontFamily="Comic Sans MS"
        textAlign="right"
        >No hay tareas guardadas.</Text>
          </Box>
      ) : (
        <VStack spacing="4">
          {taskList.map((taskItem) => (
            renderTask(taskItem)
          ))}
        </VStack>
      )}
      </Box>
   
  );
}