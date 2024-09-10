import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Home from './routes/Home.jsx'

//Criando a função que vai criar as rotas

const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elementos Filho
    children:[
      {path:'/',element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/dashboard',element:<Dashboard/>},
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
