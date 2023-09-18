import { useEffect, useState } from "react";
export function useTaskHandler (initialTasks){

// Cree un hook con 3 funciones. Agregar, eliminar y modificar con su respectivo retorno
    const [taskList, setTaskList] = useState(initialTasks);
   
    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
      }, [taskList]);

//Cree la funcion para aagregar nuevas tareas
    const newTask = (id, tarea, descripcion, state) => {
        if(id==''){
           id=Date.now()
        }
        const newTask={id:id, taskName:tarea, state:state, descripcion:descripcion}
        setTaskList([...taskList, newTask]);
    };
        const deleteTask = (tareaId) => {
        const updatedTareas = taskList.filter((tarea) => (tarea.id !== tareaId));
        console.log(updatedTareas)
        setTaskList(updatedTareas);
    };
    //Se creo una funcion para modificar el estado de la tarea elegida
    const modifyState = (tareaId) => {   
        const updatedTasks = taskList.map((task) =>
        task.id === tareaId ? { ...task, state: !task.state } : task
      );
      setTaskList(updatedTasks);
       localStorage.setItem('taskList', JSON.stringify(taskList));
      //setTaskList(taskList)
   };
return ([taskList, newTask, deleteTask, modifyState])   }