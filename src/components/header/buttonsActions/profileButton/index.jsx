import { useNavigate } from "react-router-dom";
import authServices from "../../../../services/authServices";
import "./profileButton.scss"

function ProfileButton() {
    const navigate = useNavigate();
    const idUserLogged = authServices.getUser();
    function navigateProfile(){
        navigate(`/profile/${idUserLogged.id}`);
    }

    return(
        <>
            <button className="buttonProfile" onClick={navigateProfile}>Perfil</button>
        </>
    )
}

export default ProfileButton;