import { jwtDecode } from "jwt-decode";

class AuthService {
    getToken() {
        return localStorage.getItem("token");
    }

    setToken(token){
        localStorage.setItem("token" , token);
    }

    removeToken(){
        localStorage.removeItem("token");
    }

    getUser(){
        try {
            const token = this.getToken();
            if(!token) return null;

            return jwtDecode(token);
        } catch (error) {
            console.log("Erro ao decodificar token", error);
            return null;
        }
    }

    isAuthenticated() {
        return !!this.getToken();
    }
}

export default new AuthService();