import React from "react";
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
    })

    const handleFormEdit = (event, name) =>{ 
        setFormData({
            ...formData,
            [name]: event.target.value,

        })
    }
    const handleForm = async (event) => {
        event.preventDedault()
        try {
            const response = await fetch("/auth/signup", {
              method: "POST",
              body: JSON.stringify(formData),
            }, console.log(json));
      
            if (!response.ok) {
              // Handle non-successful response (e.g., display error message)
              console.error("Erro ao registrar usuário:", response.statusText);
              return; // Exit the function if there's an error
            }
      
            const json = await response.json();
            console.log("Usuário registrado com sucesso:", json);
      
            // Display success message or redirect to another page
            alert("Usuário registrado com sucesso!"); // Simple example, replace with your desired logic
          } catch (err) {
            console.error("Erro ao registrar usuário:", err);
            console.log(json);
          }
        };
    return(
        <div className="r-container">
            <span className="title">Teste-YouX</span>
            <span className="sub-title">Registro</span>
            <form action="POST" onSubmit={handleForm}>
                <input type="text" name="username" placeholder="Digite o Nome" required value={formData.username} onChange={(e) => {handleFormEdit(e, 'username')}} />
                <input type="email" name="email" placeholder="Digite o e-mail" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
                <input type="password" name="password" placeholder="Digite a senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
                <label htmlFor="role">Função:</label>
                <select name="role" id="role" required value={formData.role} onChange={(e) => {handleFormEdit(e, 'role')}}>
                    <option value="admin" name="role">Administrador</option>
                    <option value="user" name="role">Usuario</option>
                    <option value="mod" name="role">Moderador</option>
                </select>
                <button>Registrar</button>
            </form>
            <p>Voce tem conta ? Login</p>
        </div>
    )
}

export default Register
