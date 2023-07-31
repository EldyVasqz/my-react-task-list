import './App.css'
import Header from './componentes/Header';
import TaskList from './componentes/TaskList';

function App (){
const lista = [
  {id:1,
  task: 'Alistarme', state:true},
  {id:2,
  task: 'Asear la casa', state:false},
  {id:3,
  task: 'Hacer las tareas',state:false},
  {id:4,
  task: 'Trabajar',state:false}
]


  return (
  <div>
    <h1>Lista de Tareas</h1>
    <TaskList todos={lista}></TaskList>
  </div>
  )

}


export default App;