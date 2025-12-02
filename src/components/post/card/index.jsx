import {Mars, Users, Venus}  from 'lucide-react';
import dayjs from 'dayjs';
import "./card.scss";


function Card({userPost, positionPost , tituloPost, descriptionPost, dtCreatePost}){
    return(
        <div className="containerCard">
            <div className="containerCardHeader">
                <div className="cardHeaderUser">
                    <div className="userImage">
                        <Users size={43}/>
                    </div>
                    <div className="userInfos">
                        <span className="userName">{userPost}</span>
                        
                    </div>
                </div>
                <div className="cardHeaderOption">
                    <span>...</span>
                </div>
            </div>

            <div className="containerCardPost">
                <div className="cardPostTitle">
                    <span className="postTitle">{tituloPost}</span>
                    <div className="postSector">
                        <span className="sector">
                            {positionPost}
                        </span> 
                    </div>
                </div>
                <div className="cardPostInfo">
                    <p>{descriptionPost}</p>
                </div>
                <div className="cardPostData">
                    <span>{dayjs(dtCreatePost).format("DD/MM/YYYY")}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;