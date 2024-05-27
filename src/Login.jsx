import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Login = () => {
  const baseUrl = "http://localhost:8080";
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigate hook

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(baseUrl + "/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
      });

      if (!response.ok) {
            console.error("Erro ao tentar logar usuário:", response.statusText);
            return; 
      }

        const json = await response.json();
        console.log("Usuário logado com sucesso:", json);
        navigate('/dashboard'); // Redirect to Dashboard after successful login
        alert("Bem vindo!");

    } catch (err) {
      console.error("Erro ao tentar logar usuário:", err);
    }
  };

  return (
    <div className="r-container">
      <span className="title">Teste-YouX</span>
      <span className="sub-title">Login</span>
      <form action="POST" onSubmit={handleForm}>
        <input
          type="text"
          name="username"
          placeholder="Digite o Nome"
          required
          value={formData.username}
          onChange={(e) => handleFormEdit(e, "username")}
        />
        <input
          type="password"
          name="password"
          placeholder="Digite a senha"
          required
          value={formData.password}
          onChange={(e) => handleFormEdit(e, "password")}
        />
        <button>Acessar</button>
      </form>
      <p>
        Ainda não tem conta?{" "}
        <a href="/register">Registrar</a>
      </p>
    </div>
  );
};

export default Login;
