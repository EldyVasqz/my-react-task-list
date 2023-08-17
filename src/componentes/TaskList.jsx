import { AiFillPlusCircle } from "react-icons/ai";
import Task from "./Task";
import { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import { useTaskHandler } from "../hooks/useTaskHandler";

export default function TaskList({todos}){
    
    const [task, setTask] = useState("");

    const [taskList, newTask, deleteTask, modifyTask] = useTaskHandler();

    const[checkState, setcheckState]=useState(false)

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

        newTask(task)
        setTask("")
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
        setTask(taskName)
        modifyTask(taskId, updatedTareas);
    
    };

    return(
        <div className="container2">
            <div>
{/*Cree la caja de texto con el boton de crear, en el input de ingresar tareas por defecto en el value me va aparecer el nombre de la tarea a modificar*/ }                
                <input value={task} placeholder="Add Task" onChange={(event) => {setTask(event.target.value)}}></input>

                <button onClick={handleNewTask} className="button"><AiFillPlusCircle className="icons"/></button>

{/*Recorro la lista de tareas con map y llamo el componente task para que me imprima el nombre de cada tarea y envio el estado para controlar el estado de cada tarea enviada al checkbox*/ }
            </div>

           {taskList.map((todo,index) =>
           
            <div 
            className="container">
            <div 
            className="lista">

{/*En el evento onChange del checkbox llamo la funcion para cambiar el estado*/ }
            <div>
                <input checked={checkState} type="checkbox" onChange={()=>checkChange(index,todo.state)}></input>
            </div>

{/*Envio el parametro del estado al estilo. Si se cumple me llamara el id de tachado de lo contrario queda sin cambios */ }			
            <div>
                    <p className={`${checkState? 'tachado':''}`}>{todo.taskName}</p>
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

    )};