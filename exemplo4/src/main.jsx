import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'


//criando a função

const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //Elementos Filhos
    children:[
        {path:'/',element:<Home/>},
        {path:'/login',element:<Login/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
