//importando o componente HelloWorld
import HelloWorld from './components/HelloWorld'
import Aluno from './components/Aluno'
import Dados from './components/Dados'
import Contador from './components/Contador'

function App() {
 

  return (
    <>
    {/*Chamando o Componente HelloWorld */}
      <HelloWorld/>
      {/*Chamando o Componente Aluno */}
      <Aluno nome="Cidade" email="cidade@gmail.com"/>

    {/*Chamando o componente Dados */}
    <Dados nivel="Admin" nome="City" senha="123456"/>
    
    {/*Chamando o componente Contador */}
    <Contador/>
    </>
  )
}

export default App
