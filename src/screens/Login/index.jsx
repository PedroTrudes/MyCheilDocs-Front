import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AlertMessage from "../../components/alertMessage";
//import { jwtDecode } from "jwt-decode";
import AssetLogin from "../../assets/SamsungDevices.jpg";
import "./login.scss";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [alert, setAlert] = useState(null);
  const [sucessLogin, setSucessLogin] = useState('wait');

  const alertMessage = () => {
    if (sucessLogin == "error") {
      setAlert({
        typeAlert: "error",
        messageAlert: "Usuario ou senha invalido",
      });
    } 
    
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  useEffect(() => {
    alertMessage();
    
    
  }, [sucessLogin]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post("http://localhost:5000/mycheil/login", {
            login_user: login,
            password_user: password,
        });

        const saveToken = res.data.token;
        setToken(saveToken);
        localStorage.setItem("token", saveToken);
        navigate("/feed");
        
        
    } catch (error) {
        alertMessage();
        setSucessLogin('error');
        setLogin("");
        setPassword("");
    }
  };

  return (
    <div className="containerLogin">
      <div className="containerImage">
        <img src={AssetLogin} alt="Imagens animado do mycheil docs" />
      </div>
      <div className="containerForm">
        <div className="form">
          <form method="post" className="formLogin" onSubmit={handleLogin}>
            <label htmlFor="email">Usuario</label>
            <input
              type="text"
              name="email"
              placeholder="email@cheil.com"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
            <label htmlFor="senha">Senha</label>
            <input
              type="text"
              name="senha"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>* Esqueceu a senha?</span>

            <div className="buttonForm">
              <button>Logar</button>
            </div>

            <div className="containerDivider">
              <div className="divider"></div>
            </div>

            <div className="containerLink">
              <span>Ja tem conta? <Link to="/register">
              <b>click aqui</b></Link></span>
            </div>
            
            <div className="alertForm">
              {alert && (
                <AlertMessage
                  messageAlert={alert.messageAlert}
                  typeAlert={alert.typeAlert}
                  style={{ fontWeight: "bold" }}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// <img src="" alt="Logo do myCheilDocs" />

export default Login;
