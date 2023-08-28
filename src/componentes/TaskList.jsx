import { AiFillPlusCircle } from "react-icons/ai";
import Task from "./Task";
import { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import { useTaskHandler } from "../hooks/useTaskHandler";

export default function TaskList({todos}){
    function handleSubmit(event){ 
        event.preventDefault();
       
    }
    let storedTaskList=[]
    useEffect(() => {
        console.log("Lista guardada1"+localStorage.getItem('taskList'))
         storedTaskList = JSON.parse(localStorage.getItem('taskList'));
           console.log("Lista guardada2"+storedTaskList)
      }, []);

//Agregue una variable de estado para guardar el id de cada tarea
    const [taskId, setTaskId] = useState(Date.now());
//Agregue una variable de estado para poder guardar la tarea
    const [task, setTask] = useState("");

//Agregue una variable de estado para poder guardar una descripcion de la tarea
    const [descripcion, setDescripcion] = useState("");

//Hago el llamado a la lista de tareas las funciones agregar, eliminar y modicicar de mi hook
    const [taskList, newTask, deleteTask, modifyTask] = useTaskHandler(storedTaskList);

//Agregue una variable de estado para verificar el cambio de estado del checkbox
    const[checkState, setcheckState]=useState(false);

//Cree la variable error para establecer cual es el error a mostrar 
    const [error, setError]=useState("");

//Cree una funcion para cambiar el estado de mi lista cuando marco el checkbox

const checkChange=(index, state) => {
    
    let newState
    
    if (state==true){
        newState=false
    }
    else {
        newState=true
    }
    taskList[index].state=newState	
    setcheckState(newState)
}

// Cree la funcion de agregar tarea a la lista de tareas

    function handleNewTask () {
       
        if (task=="" || task.length<3)
        {
            setError("Caracteres insuficientes");
        }
        else{

//Envio el valor del id, nombre de la tarea y descripcion, si se va a actualizar una tarea existente va mantener el mismo id para que se agregue en la misma posicion
          
            newTask(taskId, task, descripcion)
            setTaskId("")
            setTask("")
            setError("");
        } 
        console.log(taskList)
    };

// Cree la funcion de eliminar tarea de la lista de tareas
    function handleDeleteTask (taskId) {

        deleteTask(taskId)
    };

// Cree la funcion de modificar tarea de la lista de tareas
    function handleModifyTask (taskId, taskName) {
        const updatedTareas = {
            id: taskId,
            task: taskName
        
        };

//Agregue a la variable de ingresar tarea el nombre de la tarea actual a modificar 
        setTaskId(taskId)
        setTask(taskName)
        setDescripcion(descripcion)
        modifyTask(taskId, updatedTareas);
    
    };

    return(
        <form onSubmit={handleSubmit}> 
        <div className="container2">
            <div>

{/*Cree la caja de texto con el boton de crear, en el input de ingresar tareas por defecto en el value me va aparecer el nombre de la tarea a modificar*/ }                
                <input value={task} placeholder="Agregar tarea" onChange={(event) => {setTask(event.target.value)}}></input>

{/*Cree el imput para guardar la descripcion de la tarea*/ }                
                <input value={descripcion} placeholder="Descripcion" onChange={(event) => {setDescripcion(event.target.value)}}></input>
                <button onClick={handleNewTask} className="button"><AiFillPlusCircle className="icons"/></button>
                <p style={{color:'red'}}>{error}</p>

{/*Recorro la lista de tareas con map y llamo el componente task para que me imprima el nombre de cada tarea y envio el estado para controlar el estado de cada tarea enviada al checkbox*/ }
            </div>
{/*Ordene la lista por id*/}
           {taskList.sort((x, y) => y.id - x.id).map((todo,index) =>
           
            <div key={index}
            className="container">
            <div 
            className="lista">

{/*En el evento onChange del checkbox llamo la funcion para cambiar el estado*/ }
            <div>
                <input checked={checkState} type="checkbox" onChange={()=>checkChange(index,todo.state)}></input>
            </div>

{/*Envio el parametro del estado al estilo. Si se cumple me llamara el id de tachado de lo contrario queda sin cambios */ }			
            <div className="tareas">
                    <h5 className={`${checkState? 'tachado':''}`}>{todo.taskName} {todo. descripcion}</h5>
                </div>	
            </div>
{/*Cree los dos botones (modificar y eliminar) con su funcion respectiva */}
            <div>
            <button
                onClick = {() => handleModifyTask(todo.id, todo.taskName)} 
                className="button"><HiPencil 
                className="icons"/></button>
            </div>
    
            <div>
            
                <button
                onClick = {() => handleDeleteTask(todo.id)}
                className="button"><FaTrashCan 
                className="icons"/></button>
            
            </div>

            </div>            
           )
           }
            </div>
            </form>

    )};