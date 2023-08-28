import { useEffect, useState } from "react";
export function useTaskHandler (initialTasks){

// Cree un hook con 3 funciones. Agregar, eliminar y modificar con su respectivo retorno
    const [taskList, setTaskList] = useState(initialTasks);


    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
      }, [taskList]);








    const newTask = (id, tarea, descripcion) => {
       
        if(id==''){
           id=Date.now()
        }
        const newTask={id:id, taskName:tarea, state:false, descripcion:descripcion}

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