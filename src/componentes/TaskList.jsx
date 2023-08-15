import { AiFillPlusCircle } from "react-icons/ai";
import Task from "./Task";
import { useState, useEffect } from "react";
export default function TaskList({todos}){
    
const [taskList, settaskList] = useState([])

//Cree el useEffect para que siempre que inicia la aplicacion realiza el codigo del useEffect
        useEffect(()=>{
        const newListStorage=window.localStorage.getItem("listStorage")
        if (newListStorage==null)
        {
        settaskList(todos)
        }    
        else {
       settaskList( JSON.parse(newListStorage))
        }

    }, [ ])   

    return(
        <div className="container2">
            <div>
{/*Cree la caja de texto con el boton de crear*/ }                
                <input type='text'></input>
                <button 
                className="button"
                ><AiFillPlusCircle 
                className="icons"/></button>
{/*Recorro la lista de tareas con map y llamo el componente task para que me imprima el nombre de cada tarea y envio el estado para controlar el estado de cada tarea enviada al checkbox*/ }
            </div>
            {taskList.map(todo => <Task
            taskName={todo.task} state={todo.state} todos={taskList} id={todo.id}></Task>)}
        </div>
    )
}
