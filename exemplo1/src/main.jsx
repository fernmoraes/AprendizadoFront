import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './components/Home.jsx'

const router= createBrowserRouter([
  {
    //Chamando Elemento Pai
    path: '/', element:<App/>,
    errorElement:<Error/>,

    //Chamando Elementos Filhos

    children:[
      {path: '/home',element:<Home/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Renderizando o routerProvider*/}
    <RouterProvider router={router} />
  </StrictMode>,
)
