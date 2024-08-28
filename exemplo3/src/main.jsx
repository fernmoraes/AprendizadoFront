import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*instalando o pacote de dependenias para criar as rotas*/
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'

/*Criando a fumção createBrowserRouter*/

const router= createBrowserRouter([
  {
    /*Criando os elementos Pai*/
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Criando os elementos filho

    children:[
      {path:'/', element:<Home/>},
      {path:'/aluno',element:<Aluno/>},
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*criando a desestruturação para que seja renderizada*/}
    <RouterProvider router={router} />
  </StrictMode>,
)
