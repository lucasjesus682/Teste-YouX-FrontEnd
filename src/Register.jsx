import React from "react";
import { useState } from "react";

const Register = () => {
    const baseUrl = "http://localhost:8080";
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: ["user", "admin", "mod"],
    })

    const handleFormEdit = (event, name) =>{ 
        if (name === 'role') {
            setFormData({ ...formData, role: [event.target.value] });
          } else {
            setFormData({
              ...formData,
              [name]: event.target.value,
            });
            }
    }
    const handleForm = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(baseUrl + "/auth/signup", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            },);
      
            console.log(response)
            if (!response.ok) {
             
              console.error("Erro ao registrar usuário:", response.statusText);
              return; 
            }
      
            const json = await response.json();
            console.log("Usuário registrado com sucesso:", json);
      
            alert("Usuário registrado com sucesso!"); 
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
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Digite o Nome" 
                    required 
                    value={formData.username} 
                    onChange={(e) => {handleFormEdit(e, 'username')}} />

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite o e-mail" 
                    required 
                    value={formData.email} 
                    onChange={(e) => {handleFormEdit(e, 'email')}}/>

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Digite a senha" 
                    required 
                    value={formData.password} 
                    onChange={(e) => {handleFormEdit(e, 'password')}}/>

                <label 
                    htmlFor="role">
                        Função:
                </label>

                <select 
                    name="role" 
                    id="role" 
                    required 
                    value={formData.role[0]} 
                    onChange={(e) => {handleFormEdit(e, 'role')}}>
                    <option 
                        value="admin"
                        name="role">
                            Administrador
                    </option>

                    <option 
                        value="user" 
                        name="role">
                            Usuario
                    </option>

                    <option 
                        value="mod" 
                        name="role">
                            Moderador
                    </option>
                    
                </select>
                <button>Registrar</button>
            </form>
            <a href="/Login">Voce tem conta ? Login</a>
        </div>
    )
}

export default Register
