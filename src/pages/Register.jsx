import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: [e.target.value] };
    });
  };

  return (
    <HelmetProvider>
      <MetaData title="Inscrever-se" />
      <section className="register">
        <div className="container">
          <h2>Increver-se</h2>
          <form className="form register__form">
            <input
              type="text"
              placeholder="Nome Completo"
              name="name"
              value={userData.name}
              onChange={changeInputHandler}
              autoFocus
            />
            <input
              type="text"
              placeholder="E-mail"
              name="email"
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
            <input
              type="password"
              placeholder="Confirmar senha"
              name="password2"
              value={userData.password2}
              onChange={changeInputHandler}
            />
            <button type="sumbit" className="btn primary">
              Registrar
            </button>
          </form>
          <small>
            Já tem uma conta? <Link to="/login">Entrar</Link>
          </small>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Register;
