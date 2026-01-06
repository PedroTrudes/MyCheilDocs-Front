import SideBar from "./sideBar";
import UserIcon from "./userIcon";
import { Menu, X } from "lucide-react";
import "./header.scss";
import { useState } from "react";
import authServices from '../../services/authServices';



function HeaderApplication() {
  const [activeMenu, setActiveMenu] = useState(false);
  const userInfos = authServices.getUser();
  const handleCheckboxChange = (e) => {
    setActiveMenu(e.target.checked);
  }

  return (
    <div className="containerHeader">
        <SideBar isActiveMenu={activeMenu}/>
        <label htmlFor="hamburguerMenu">{
          activeMenu ? <X/> : <Menu />
          }</label>
          <input type="checkbox" 
            id="hamburguerMenu"
            checked={activeMenu}
            onChange={handleCheckboxChange}
          />
          <h2>MyCheil-DOCS</h2>
          <UserIcon typeUser={userInfos?.avatar} nameUser={userInfos?.name}/>
    </div>
  );
}

export default HeaderApplication;
