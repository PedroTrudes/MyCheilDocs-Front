import { useCallback, useEffect, useRef, useState } from "react";
import HeaderApplication from "../../components/header";
import Card from "../../components/post/card";
import "./feed.scss";
import { jwtDecode } from "jwt-decode";
import postServices from "../../services/postServices";
import { div } from "framer-motion/client";

function Feed() {
    const token = localStorage.getItem("token");
    const userInfos = jwtDecode(token)
    
    const [posts, setPosts] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const observerRef = useRef();

    const fetchPosts = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        
        try {
            const data = await postServices.getAllPostPagination(5, cursor);

            const newPost = data.posts;
            const nextCursor = data.nextCursor;

            setPosts((prev) => [
                ...prev,
                ...newPost.filter((item) => !prev.some((p) => p._id === item._id)),
            ]);

            setCursor(nextCursor);
            setHasMore(nextCursor !== null);
            console.log(data)

        } catch (error) {
            console.log("Erro no fetch", error)
        }

        setLoading(false);
    }, [cursor, loading, hasMore]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const lastPostRef = useCallback((node) => {
        if(loading) return;

        if(observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMore){
                fetchPosts();
            }
        },
    {
        threshold: 1.0,
    }
    );
        if (node) observerRef.current.observe(node);

    },
    [loading, hasMore, fetchPosts]
);

    return(
        <div className="feed">
            <HeaderApplication />
            <div className="containerFeed">
                {posts.map((post, index) => {
                    const userName = post.user_post_fk?.name_user ?? "Usuário";
                    const jobName = post.label_post_fk?.name_job ?? "Cargo";
                    if(index === posts.length -1){
                        return(
                            <div ref={lastPostRef} key={post._id} className="containerLastPost">
                                <Card 
                                    userPost={userName} 
                                    positionPost={jobName} 
                                    tituloPost={post.titulo_post} 
                                    descriptionPost={post.description_post} 
                                    dtCreatePost={post.createdAt}
                                />
                            </div>
                        );
                    }
                    return(
                        <Card key={post._id}
                        userPost={userName} 
                        positionPost={jobName} 
                        tituloPost={post.titulo_post} 
                        descriptionPost={post.description_post} 
                        dtCreatePost={post.createdAt}
                        />
                    )
                }
                )}

                {loading && <p style={{textAlign: "center"}}>Carregando...</p>}

                {!hasMore && (
                    <p style={{textAlign: "center", marginTop: 10}}>
                        você viu todos os posts
                    </p>
                )}
                
            </div>

        </div>
    )
}

export default Feed;