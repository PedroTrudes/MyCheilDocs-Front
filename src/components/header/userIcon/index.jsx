import {Mars, Users, Venus}  from 'lucide-react';
import "./userIcon.scss";
import { useEffect, useState } from 'react';
import ModalOptions from '../modalOptions';

function UserIcon({typeUser, nameUser}) {
    //const userInfos = authServices.getUser();
    const icons = {man: Mars, woman: Venus, group: Users}
    const IconComponent = icons[typeUser] || Users;
    const [openOptions, setOpenOptions] = useState(false);
    
    //Vamos criar props in modal option passando as infos do user
    function OptionsUsers(){
        if(!openOptions){
            setOpenOptions(true);
            return <>Chamando componente</>
        }else{
            setOpenOptions(false);
            return <>Não é true não chamamos o componente</>
        }
    }
    useEffect(() => {
        //console.log("Mudou");
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