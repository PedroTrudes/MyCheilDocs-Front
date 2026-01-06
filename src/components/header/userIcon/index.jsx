import {Mars, Users, Venus}  from 'lucide-react';
import "./userIcon.scss";
import { useEffect, useState } from 'react';
import ModalOptions from '../modalOptions';

function UserIcon({typeUser, nameUser}) {
    //const userInfos = authServices.getUser();
    const icons = {man: Mars, woman: Venus, group: Users}
    const IconComponent = icons[typeUser] || Users;
    const [openOptions, setOpenOptions] = useState(true);
    
    //Vamos criar props in modal option passando as infos do user
    function OptionsUsers(){
        if(!openOptions){
            setOpenOptions(true);
        }else{
            setOpenOptions(false);
        }
    }
    useEffect(() => {
    }, [openOptions])

    return(
        <div className="containerIcon" onClick={OptionsUsers}>
            <span className='iconName'>{nameUser}</span>
            <IconComponent />

            {!openOptions && (
            <div className="containerOptionUsers">
                <ModalOptions />
            </div>

            )}
        </div>
    )
}

export default UserIcon;