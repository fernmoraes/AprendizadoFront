import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Dashboard =()=>{

//Hook-useNavigate redireciona o componente
const navigate = useNavigate();

//criando a função handleLogout
const handleLogout=()=>{

    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("by by...");
    navigate("/");

    
}

    return(
        <>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>
            <IoMdLogOut />
        </button>

        </>
    )
}
export default Dashboard