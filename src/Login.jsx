import React from "react";

const Login = () => {
    return(
        <div className="r-container">
            <span className="title">Teste-YouX</span>
            <span className="sub-title">Login</span>
            <form action="">
                <input type="text" placeholder="Digite o Nome"/>
                <input type="password" placeholder="Digite a senha" />
                <button>Acessar</button>
        
            </form>
            <p>Voce ainda náo registrou ? Registrar</p>
        </div>
    )
}

export default Login