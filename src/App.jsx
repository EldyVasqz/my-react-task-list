import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { ChakraProvider, CSSReset, Box, Center, } from '@chakra-ui/react';
import { Grid, GridItem, Heading, Text, Button } from '@chakra-ui/react';

import Home from './componentes/Home';
import SobreNosotros from './componentes/SobreNosotros';
import TaskList from './componentes/TaskList';
import Header from './componentes/Header';

function App() {
  return (
    <ChakraProvider >
      <CSSReset />
  
      <BrowserRouter>
      <Center>
        <Box 
        width="1200px">  <Grid
        templateColumns="repeat(12, 1fr)" 
        gap={4} 
        p={4} 
      >
        
        <GridItem colSpan={12}>
          <Header/>
        </GridItem>

        
        <GridItem colSpan={12}>
          <Box p={4} borderWidth="1px" boxShadow="md">
                      <Suspense fallback="Cargando...">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/SobreNosotros" element={<SobreNosotros />} />
                <Route path="/Tareas" element={<TaskList />} />
              </Routes>
            </Suspense>
          </Box>
        </GridItem>

        {/* Pie de página */}
        <GridItem colSpan={12}>
          <Box p={4} borderWidth="1px" boxShadow="md">
            <Text 
            
            fontFamily="Comic Sans MS" fontSize="md" textAlign="center">
              © 2023 Mi Lista de Tareas. Todos los derechos reservados.
            </Text>
          </Box>
        </GridItem>
      </Grid>

        
        
          
          
        </Box>
        </Center>
      </BrowserRouter>
     
    </ChakraProvider>
  );
}

export default App;

// import './App.css'
// import React from 'react';
// import { Menu } from './componentes/Menu';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Box, Button } from '@chakra-ui/react';
// import Header2 from './componentes/Header';

// import { Suspense } from 'react';

// const Home = React.lazy(() => import("./componentes/Home"));
// const SobreNosotros = React.lazy(() => import("./componentes/SobreNosotros"));
// const TaskList = React.lazy(() => import("./componentes/TaskList"));

// function App (){


  // Cree un Hook con un array para controlar la lista de tareas
// const taskList=[
//   {id:1,
//   task: 'Alistarme', 
//   state:true},
//   {id:2,
//   task: 'Asear la casa', 
//   state:false},
//   {id:3,
//   task: 'Hacer las tareas',
//   state:false},
//   {id:4,
//   task: 'Trabajar',state:false}
// ]
  // return (

//Llame el componente taskList enviandole la lista de tareas

    
//     <BrowserRouter>
//     <Box>
//     <div className="contenedorInterfaz"> 
//     <Header2/>
//           <Menu />
//           <Suspense fallback={"Cargando..."}>
//           <Routes>
//           <Route path="/home" element={<Home/>}/> 
//           <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
//           <Route path="/Tareas" element={<TaskList/>}/>
//         </Routes>
//         </Suspense>
//         </div>
//         </Box>  
//         </BrowserRouter>


//   )

// }


