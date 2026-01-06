import { replace, useNavigate } from "react-router-dom";
import "./logoutButton.scss";
import { useEffect } from "react";

function LogoutButton(){
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("token");
        navigate("/", {replace : true});
    }
    return(
        <button onClick={handleLogout} className="buttonLogout">Sair</button>
    );
}

export default LogoutButton;