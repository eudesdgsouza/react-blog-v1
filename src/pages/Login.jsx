import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: [e.target.value] };
    });
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Entrar</h2>
        <form className="form login__form">
          <input
            type="text"
            placeholder="E-mail"
            name="e-mail"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
       
          <button type="sumbit" className="btn primary">Login</button>
       
        </form>
        <small>Não tem conta? <Link to="/register">Inscreva-se</Link></small>
      </div>
    </section>
  );
};

export default Login;
