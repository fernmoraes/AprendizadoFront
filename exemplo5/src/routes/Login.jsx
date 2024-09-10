import { useRef } from "react"

const Login=()=>{

//hook- useRef pega a referência do componente ou elemento e guarda
    const usuario = useRef();
    const senha = useRef();
    
    return (
        <section className="container">
            <div className="container-login">
                <div className="login">

                    <form className="login-form">
                        <span className="titulo-login">Faça seu Login</span>

                        <div className="w-input">
                            <input
                                type="text"
                                className="input-form"
                                id="usuario"
                                ref={usuario}
                            />                      
                        </div>


                        <div className="w-input">
                            <input
                                type="password"
                                className="input-form"
                                id="senha"
                                ref={senha}
                            />                      
                        </div>

                        <div className="login-btn">
                            <button type="submit" className="login-form-btn">Login</button>
                        </div>

                        <ul className="utilidades">
                            <li>
                                <span className="text1">Esqueceu sua senha?</span>
                            </li>
                            <li>
                                <span className="text1">Não possui conta?</span>
                                    <a href="#">
                                        Criar
                                    </a>
                            </li>
                        </ul>

                    </form>

                </div>
            </div>
        </section>
    )
}
export default Login