import api from "./api"

class User{
    async getByIdUser(id){
        const response = await api.get(`/user/${id}`);
        return response.data.user
    }
}

export default new User();