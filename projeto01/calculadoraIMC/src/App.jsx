import {useState, useEffect} from 'react'
import Header from './components/Header'
import Resultado from './components/Resultado'
import './css/base.css'
import './css/app.css'

function App() {

  //Hooks- useState - altera o estado da variavel

  const [altura,setAltura]= useState(0);
  const [peso, setPeso]= useState(0);
  const [resultado,setResultado] = useState(0);
  const [mostrarresultado, setMostrarResultado]= useState(false);

  //criando a função calcular imc
  const calcularImc=()=>{
    const imc = peso /( altura * altura)
    return setResultado(parseInt(imc.toFixed(2)))
  }

  //Hooks- useEffect - faz realizar um efeito colateral no resultado
  useEffect(()=>{
    //condicional ternaria
    resultado > 0 ? setMostrarResultado(true):setMostrarResultado(false) 
  },[resultado])
  

  return (
    <>
    <div className="container">
      <div className="box">
        {/*Chamando o componente Header*/}
        <Header/>
        <form>
          <div>
            <label htmlFor="altura">Altura<span className="span">(Ex: 1.80)</span></label>
            <input type="number" id="altura" placeholder="Altura" 
            onBlur={({ target })=>parseInt(setAltura(target.value))}/>
          </div>

          <div>
            <label htmlFor="peso">Peso:<span className="span">(Ex: 80)</span></label>
            <input type="number" id="peso" placeholder="peso" 
            onBlur={({ target })=>parseInt(setPeso(target.value))}/>
          </div>


          <button type="submit" onClick={calcularImc}>Calcular</button>
        </form>
      </div>

      {mostrarresultado &&(
        // chamando o componente resultado e passando a props
        <Resultado resultado={resultado}/>
      )}

    </div>
      
    </>
  )
}

export default App
