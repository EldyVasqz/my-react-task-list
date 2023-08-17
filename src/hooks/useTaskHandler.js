import { useState } from "react";
import TaskList from "../componentes/TaskList";
export function useTaskHandler (){

// Cree un hook con 3 funciones. Agregar, eliminar y modificar con su respectivo retorno
    const [taskList, setTaskList] = useState([]);

    const newTask = (tarea) => {
        const newTask={id:Date.now(), taskName:tarea, state:false}

        setTaskList([...taskList, newTask]);
    };

    const deleteTask = (tareaId) => {
        const updatedTareas = taskList.filter((tarea) => (tarea.id !== tareaId));
        console.log(updatedTareas)
        setTaskList(updatedTareas);
    };

    const modifyTask = (tareaId, updatedTarea) => {
        const updatedTareas = taskList.map(tarea =>
        tarea.id === tareaId? updatedTarea : tarea);

         const newTareas = taskList.filter((tarea) => (tarea.id !== tareaId));
        setTaskList(newTareas);
    };

return ([taskList, newTask, deleteTask, modifyTask]) 
   
}