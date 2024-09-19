import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom"

const Dashboard =()=>{

    //Hook-useNavigate redireciona o componente
    const navigate = useNavigate();
    //criando a função handleLogout
    const handleLogout=()=>{
        sessionStorage.removeItem("usuário");
        sessionStorage.removeItem("senha");
        alert("by by...");
        navigate("/");
}
    return(
        <>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>
            <CiLogout/>
        </button>
        </>
    )
}
export default Dashboard