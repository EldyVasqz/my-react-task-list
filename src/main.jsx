import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ColorModeScript } from '@chakra-ui/react'
import { ChakraProvider, Center } from '@chakra-ui/react'
import  theme  from './componentes/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} /> 

    <Center>
       <App />
       </Center>
    </ChakraProvider>
  </React.StrictMode>,
)
