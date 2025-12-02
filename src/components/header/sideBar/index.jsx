import { useEffect } from "react";
import { BugPlay, Pencil, ClipboardCheck, HeartHandshake, Earth } from "lucide-react";
import "./navBar.scss";

function SideBar({isActiveMenu}){

  const menuJobFilter = [
    {job: "All", icon: Earth},
    {job: "Account", icon: ClipboardCheck},
    {job: "Publisher", icon: Pencil},
    {job: "QA", icon: BugPlay},   
    {job: "RH", icon: HeartHandshake}, 
] 
  useEffect(() => {
    
  }, [isActiveMenu])

    return(
      <div className={`containerNavBar ${isActiveMenu ? "sideBarIsOpen" : "sideBarIsClosed"}`}>
        {menuJobFilter.map((menu, index) => {  
          const IconJob = menu.icon;
          return(
              <button className={`buttonNavBar ${isActiveMenu ? "" : ""}`}>
                <IconJob size={24} />
                {isActiveMenu &&(
                  <span key={index}>{menu.job}</span>
                )}
              </button>
          )
        })}
      </div>
    )
}

export default SideBar;