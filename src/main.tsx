import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Login from './Pages/Auth/Login.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.tsx'
import "@fontsource/montserrat"; 
import theme from './Theme.tsx'
Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
       <ChakraProvider  theme={theme}>
       <RouterProvider router={router} />

       {/* <Login/> */}

    </ChakraProvider>
  // </React.StrictMode>,
)
