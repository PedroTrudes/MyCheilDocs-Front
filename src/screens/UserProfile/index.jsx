import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userServices from "../../services/userServices";
import HeaderApplication from "../../components/header";
import Card from "../../components/post/card";
import "./userProfile.scss";
import userPhoto from "../../assets/userImage/userDefault.png";
import postServices from "../../services/postServices";
import { h1 } from "framer-motion/client";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [postByUser, setPostByUser] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadUser() {
      try {
        const data = await userServices.getByIdUser(id);
        const dataPost = await postServices.getAllPostByUser(id);
        setUser(data);
        setPostByUser(dataPost.posts)
        console.log(dataPost)
        console.log(data);
      } catch (error) {
        console.log("Erro ao carregar usuario: ", error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!user && !loading) return <p>Usuario não foi localizado</p>;

  return (
    <>
      <HeaderApplication />
      
      <div className="containerUserInformation">
        <div className="containerUser">
          <div className="backgroundUser">
          </div>
          <div className="userInfos">
            <img src={userPhoto} alt="Imagem do usuario" />
            <h2 className="userName">{user?.name_user}</h2>
            <span className="userLabel">{ user?.job_position_fk.name_job.toLowerCase()}</span>
          </div>
        </div>
      </div>

      <div className="containerPostByUser">
         <span>Minhas postagens</span>
         <div className="containerCardsPost">
          {postByUser.length > 0 ? (
            postByUser.map((post) => (
              <Card 
              key={post.id}
              userPost={post.user_post_fk.name_user} 
              positionPost={post.label_post_fk.name_job} 
              tituloPost={post.titulo_post} 
              descriptionPost={post.description_post} 
              dtCreatePost={post.createdAt} />
            ))
          ): (
            <span>Esse usuário ainda não publicou nada.</span>
          )
        }
        </div>

      </div>
      
    </>
  );
}

/*postByUser.map((post) => (
<pre>{JSON.stringify(postByUser, null, 2)}</pre> 
          <Card titulo={post.titulo_post} description={post.description_post} dtCreate={post.createAt}/>
          
        ))
       */


export default UserProfile;