import { useState, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'

const Produto =()=>{

    const navigate =useNavigate();

    let {id}= useParams();
    
    const [produto, setProduto]=useState({
        id,
        nome:"",
        foto:"",
    })

    const handleChange=(e)=>{
        setProduto({...produto, [e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:5000/produto/${id ? id : ''}`,{
            method:"post",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(produto)
        }).then(()=>{
            navigate("/")
        })
    }
    useEffect(()=>{
        if(id){
            fetch(`http://localhost:5000/produto/${id}`)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setProduto(data)
            })
        }
    },[id])



    return(
        <section className="produto">

        <h1>Cadastrar Produto</h1>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="nome">Nome do Produto</label>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={produto.nome}
                    onChange={handleChange}
                />
            </p>

            <p>
                <label htmlFor="foto">Foto do Produto</label>
                <input
                    type="url"
                    name="foto"
                    id="foto"
                    value={produto.foto}
                    onChange={handleChange}
                />
            </p>
            <button type="submit">Cadastrar</button>

        </form>

        </section>
    )
}
export default Produto