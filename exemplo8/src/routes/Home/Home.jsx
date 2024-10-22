import { useState, useEffect } from "react"

const Home =()=>{

    const [produto, setProduto]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/produto")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProduto(data)
        })
    },[])

    return(
        <>
        <div>
            {produto.map((item, index)=>(
                <div key={index}>
                    {item.nome}
                   <img src={item.foto}/>
                </div>
            ))}            
        </div>
        </>
    )
}
export default Home