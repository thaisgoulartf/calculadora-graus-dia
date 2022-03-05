import { FormEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import alface from "../assets/images/alface.png";
import { Button } from "../components/Button";
import { useAuthContext } from "../hooks/useAuthContext";
import { auth } from "../services/firebase";

import "../styles/autenticacao.scss";

export function Register() {
  const { user, signUpWithEmailAndPassword } = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    signUpWithEmailAndPassword(name, email, password);

    history.goBack();
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  });

  return (
    <div id="page-auth">
      <aside>
        <img src={alface} alt="agricultor" />
      </aside>
      <main>
        <div className="content">
          <strong>Calculadora Graus dia</strong>
          <p>Cadastro de usuário</p>
          <form onSubmit={handleRegister}>
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Nome"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <label>Confirmar Senha:</label>
            <input
              type="password"
              placeholder="Confirmar Senha"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
            <Button type="submit">Cadastrar</Button>
            <p>
              <Link to="/"> Voltar </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
