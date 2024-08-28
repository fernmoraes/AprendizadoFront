//pegando os dados atraves de props(propriedade)
const Aluno=(props)=>{

    return(
        <>

        <p>Nome do Aluno:{props.nome}</p>
        <p>Email do aluno:{props.email}</p>
        </>
    )
}
export default Aluno