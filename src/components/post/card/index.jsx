import {Users, Pencil, Trash}  from 'lucide-react';
import dayjs from 'dayjs';
import "./card.scss";
import authServices from '../../../services/authServices';
import postServices from '../../../services/postServices';


function Card({postId,
    userPost, 
    positionPost , 
    tituloPost, 
    descriptionPost, 
    dtCreatePost,
    idUser,
    onDelete
}){

    const userActive = authServices.getUser();
    const isOwner = userActive && userActive.id && idUser && userActive.id === idUser;
    console.log(postId)

    function optionDeletePost(){
        postServices.deletePost(postId).then(() => {{
            onDelete(postId)
        }}).catch((error) => {
            console.error("Erro ao excluir post", error);
        })
    }
    return(
        <div className="containerCard">
            <div className="containerCardHeader">
                <div className="cardHeaderUser">
                    <div className="userImage">
                        <Users size={43}/>
                    </div>
                    <div className="userInfos">
                        <span className="userName">{userPost}</span>
                        <span className='userName'>{idUser}</span>
                        
                    </div>
                </div>
                {isOwner &&(
                    <div className="cardHeaderOption">
                        <button className="iconDelete" onClick={optionDeletePost}>
                            <Trash size={22} />
                        </button>
                        <button className="iconEdit">
                            <Pencil size={22} />
                        </button>
                    </div>
                )}
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