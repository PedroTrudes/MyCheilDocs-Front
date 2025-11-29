import HeaderApplication from "../../components/header";
import Card from "../../components/post/card";
import "./feed.scss";
import { jwtDecode } from "jwt-decode";

function Feed() {
    const token = localStorage.getItem("token");
    const userInfos = jwtDecode(token)
    console.log(userInfos)
    return(
        <div className="feed">
            <HeaderApplication />
            <div className="containerFeed">
                <Card />
                <Card />
                <Card />
                <Card />
                
            </div>
            <div>
                <h1>{userInfos.name}</h1>
            </div>
        </div>
    )
}

export default Feed;