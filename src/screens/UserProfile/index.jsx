import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.get(`/user/${id}`);
        setUser(response.data.user);
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
    <div className="teste">
      <h2>Perfil do usuario</h2>
      <span>Nome: {user?.name_user}</span>

      <pre>{JSON.stringify(user, null, 2)}</pre> 
    </div>
  );
}

export default UserProfile;