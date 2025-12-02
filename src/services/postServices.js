import api from "./api";

class Post{
    //get"/post/:id"
    async getAllPost(){
        const { data } = await api.get("/post");
        return data;
    }

    async getAllPostByUser(id) {
        const { data } = await api.get(`/all-post/user/${id}`);
        return data;
    }


}

export default new Post();