import {useRef} from 'react'
import Cliente from '../components/Cliente'

const Login=()=>{

        /*Hook- useRef - ele retorna uma referênfia a um elemento ou componente
         sem ser renderizado novamente*/
         const usuario =useRef();
         const senha=useRef();


         //Pegando os dados do usuario e senha e gravando na sessão
         const getUsuario = sessionStorage.getItem("usuario");
         const getSenha = sessionStorage.getItem("senha");

         //criando a função handleLogin
         const handleLogin=()=>{

            if(usuario.current.value =="Admin" && senha.current.value =="123456"){
                
                //criando um token de autenticação

                let token=
                    Math.random().toString(16).substring(2)+
                    Math.random().toString(16).substring(2);

                sessionStorage.setItem("usuario","Admin");
                sessionStorage.setItem("senha",token)
                
                alert("Seja Bem vindo ao SISTEMA")
            }
            else{
                alert("Usuário/Senha INVÁLIDOS")
            }
         }



    return(
        <>
           <section>
            {/*USANDO CONDIÇÃO TERNARIA PARA CHAMAR O COMPONENTE CLIENTE*/}

            {getUsuario && getSenha ?(
                <Cliente/>
            ): 

                <form onSubmit={handleLogin}>
                    <p>Usuário:
                        <input type="text" placeholder="Digite seu Usuário" ref={usuario}/>
                    </p>

                    <p>Senha:
                        <input type="password" placeholder="Digite sua Senha" ref={senha}/>
                    </p>
                    <button type="submit">Entrar</button>
                </form>
                }
           </section>
        </>
    )
}
export default Login