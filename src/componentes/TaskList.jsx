/* eslint-disable react/jsx-key */
import { AiFillPlusCircle } from "react-icons/ai";
import Task from "./Task";
import { useState } from "react";

import { useTaskHandler } from "../hooks/useTaskHandler";

export default function TaskList(){
    function handleSubmit(event){ 
        event.preventDefault();
    }

    
    let storedTaskList=[]
    storedTaskList = JSON.parse(localStorage.getItem('listStorage'));

    
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
// Cree la funcion de agregar tarea a la lista de tareas
    function handleNewTask () {
        if (task=="" || task.length<3)
        {
            setError("Caracteres insuficientes");
        }
        else{

//Envio el valor del id, nombre de la tarea y descripcion, si se va a actualizar una tarea existente va mantener el mismo id para que se agregue en la misma posicion
            newTask(taskId, task, descripcion, checkState)
            setTaskId("")
            setTask("")
            setDescripcion("")
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
     deleteTask(taskId)  
      
     setTaskId(taskId)
        setTask(taskName)
        setDescripcion(descripcion)
        setcheckState(state)          
    } 
    return(
        <form onSubmit={handleSubmit} className="containerGeneral"> 

        <div className="container3">
            <section className="contenedorTareas">
{/*Cree la caja de texto con el boton de crear, en el input de ingresar tareas por defecto en el value me va aparecer el nombre de la tarea a modificar*/ }                
                <input className="tarea" value={task} placeholder="Mi tarea" onChange={(event) => {setTask(event.target.value)}}></input>
{/*Cree el imput para guardar la descripcion de la tarea*/ }                
                <input className="descripcion" value={descripcion} placeholder="Apuntes" onChange={(event) => {setDescripcion(event.target.value)}}></input>
                <button onClick={handleNewTask} className="button"><AiFillPlusCircle className="icons"/></button>
                <p style={{color:'red'}}>{error}</p>
{/*Recorro la lista de tareas con map y llamo el componente task para que me imprima el nombre de cada tarea y envio el estado para controlar el estado de cada tarea enviada al checkbox*/ }
            </section>
{/*Ordene la lista por id*/}
           {taskList.sort((x, y) => y.id - x.id).map((todo, index) =>
            <div key={index}>
           <Task todos={taskList} descripcion={todo.descripcion} taskName={todo.taskName} state={todo.state}  id={todo.id} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask}  modifyState={modifyState}  ></Task>
           </div>
           )
           }
           </div>
            </form>

    )}