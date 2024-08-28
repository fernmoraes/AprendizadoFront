
const Botao = () => {

    // criando a função handleClick
    const handleClick = () => {
        alert("Eu mudei a Mensagem")
    }


    return (
        <>
            {/*criando um elemento botão */}
            <button onClick={handleClick}>Clique componente</button>
        </>
    )
}
export default Botao