import { useState } from 'react';
import './App.css'
import Header from './componentes/Header';
import TaskList from './componentes/TaskList';

function App (){

  // Cree un Hook con un array para controlar la lista de tareas

const [taskList, settaskList] = useState([
  {id:1,
  task: 'Alistarme', state:true},
  {id:2,
  task: 'Asear la casa', state:false},
  {id:3,
  task: 'Hacer las tareas',state:false},
  {id:4,
  task: 'Trabajar',state:false}
])
  return (

//Llame el componente taskList enviandole la lista de tareas
  <div>
    <h1>Lista de Tareas</h1>
    <TaskList todos={taskList}></TaskList>
  </div>
  )

}


export default App;