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

    async getAllPostPagination(limit = 5, cursor = null, jobPosition = null, title = null){
        try {
            const response = await api.get("/post-pagination", {
                params : {
                    limit, 
                    cursor:  cursor || undefined, 
                    jobPosition, 
                    title
                },
            });

            return response.data;
        } catch (error) {
            console.error("Erro ao buscar postagens", error);
            throw error;
        }
    }

}

export default new Post();