import { useEffect } from "react";
import { BugPlay, Pencil, ClipboardCheck, HeartHandshake, Earth } from "lucide-react";
import "./navBar.scss";

function SideBar({isActiveMenu}){

  const menuJobFilter = [
    {job: "All", icon: Earth, idJob: ""},
    {job: "Account", icon: ClipboardCheck, idJob: "67dc7b02e4ae3efcc2984af1"},
    {job: "Publisher", icon: Pencil, idJob: "67dc7aeae4ae3efcc2984aee"},
    {job: "QA", icon: BugPlay, idJob: "idDeQA"},   
    {job: "RH", icon: HeartHandshake, idJob: "idDeRH"}, 
    {job: "UX-UI", icon: BugPlay, idJob: "67dc7b1ee4ae3efcc2984af4"}
] 

  function alertIdJob(job){
    console.log("O id é essse:", job);
  }
  useEffect(() => {
    
  }, [isActiveMenu])

    return(
      <div className={`containerNavBar ${isActiveMenu ? "sideBarIsOpen" : "sideBarIsClosed"}`}>
        {menuJobFilter.map((menu, index) => {  
          const IconJob = menu.icon;
          return(
              <button className={`buttonNavBar ${isActiveMenu ? "" : ""}`} key={menuJobFilter.idJob} onClick={alertIdJob()}>
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