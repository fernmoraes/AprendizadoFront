import React from 'react'

const Dados=(resultado)=>{

  if(resultado < 18.5){
    return(
    <>
    <td>
      Abaixo do peso
    </td>
    <td>
      Abaixo de 18.5
    </td>
    </>
    )
  }
  else if(resultado > 18.5 && resultado < 25){
    return(
      <>
      <td>
        Peso Normal
        <td>
          18.5 - 24.9
        </td>
      </td>
      </>
    )
  }
  else if(resultado > 24 && resultado < 30){
    return(
      <>
      <td>Sobre Peso</td>
      <td>25 - 29.9</td>
      </>
    )
  }
  else if(resultado > 29 && resultado < 36){
    return(
      <>
        <td>
          Obesidade Grau 1
        </td>
        <td>
          30 - 35
        </td>
      </>
  )
  }
  else {
    <>
    <td>
      Procure ajuda
      Maior que 35
    </td>
    </>
  }
}

//passando a props ( acessando as propriedades do elemento)
const Resultado = ({resultado}) => {
  
  return (
    //fragments
    <>
    <div className='resultado'>
      <h2>
        Seu IMC é:
        <span className='imcSpan'>{resultado}</span>
      </h2>   
    </div>
    <table className='table'>
      <thead className='tableHeader'>
        <tr>
          <th>
            Classificação
          </th>
          <th>
            IMC
          </th>
        </tr>
      </thead>
      <tbody className='tableBody'>
        <tr>
          {Dados(resultado)}
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Resultado
