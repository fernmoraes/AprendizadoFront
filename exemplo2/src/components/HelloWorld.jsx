import Botao from './Botao'

const HelloWorld=()=>{

    //Declarando as variaveis
    let nome ="Fiap";
    
    //criando a função clique
    function clique(){
        //alerta com string literal (templat string)
        alert(`Ola dev, ${nome}`)
    }


    return(
        <>
        <p>HelloWorld</p>
        <p>Olá, Dev {nome}</p>
        <button onClick={clique}>Clicar</button>
        <h3>Botão de um componente</h3>
        <Botao/>
      


        </>
    )
}
export default HelloWorld