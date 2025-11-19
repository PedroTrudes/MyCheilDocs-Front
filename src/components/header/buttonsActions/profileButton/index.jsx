import "./profileButton.scss"
import { useNavigate } from "react-router-dom";

function ProfileButton() {
    const navigate = useNavigate();
    function navigateProfile(){
        navigate("/profile");
    }

    return(
        <>
            <button className="buttonProfile" onClick={navigateProfile}>Perfil</button>
        </>
    )
}

export default ProfileButton;