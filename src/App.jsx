
import './App.css'

import TaskList from './componentes/TaskList';
import { Menu } from './componentes/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SobreNosotros from './componentes/SobreNosotros';
import Home from './componentes/Home';

function App (){


  // Cree un Hook con un array para controlar la lista de tareas
const taskList=[
  {id:1,
  task: 'Alistarme', 
  state:true},
  {id:2,
  task: 'Asear la casa', 
  state:false},
  {id:3,
  task: 'Hacer las tareas',
  state:false},
  {id:4,
  task: 'Trabajar',state:false}
]
  return (

//Llame el componente taskList enviandole la lista de tareas
  <div>
    
    <BrowserRouter>
    <div className="contenedorInterfaz"> 
          <Menu />
          <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
          <Route path="/Tareas" element={<TaskList/>}/>
        </Routes>
        </div>  
        </BrowserRouter>

    </div>
  )

}


export default App;