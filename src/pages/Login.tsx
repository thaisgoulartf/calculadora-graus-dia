import { Link, useHistory } from "react-router-dom";

import alface from "../assets/images/alface.png";
import googleIcon from "../assets/images/googleIcon.svg";
import { Button } from "../components/Button";

import "../styles/autenticacao.scss";
import { useAuthContext } from "../hooks/useAuthContext";
import { FormEvent, useState } from "react";
import { useCultureContext } from "../hooks/useCultureContext";

export function Login() {
  const history = useHistory();
  const { user, signInWithGoogle, signInWithEmailAndPassword } =
    useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loadCultures } = useCultureContext();

  async function handleSignInWithGoogle(event: FormEvent) {
    event.preventDefault();
    await signInWithGoogle();
    const cultures = await loadCultures(user!.id);
    if (cultures && cultures.length > 0) {
      history.push("/dashboard");
    } else {
      history.push("/nova-cultura");
    }
  }

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    await loadCultures(user!.id);
    const cultures = await loadCultures(user!.id);
    if (cultures && cultures.length > 0) {
      history.push("/dashboard");
    } else {
      history.push("/nova-cultura");
    }
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={alface} alt="agricultor" />
      </aside>
      <main>
        <div className="content">
          <strong>Calculadora Graus dia</strong>
          <p data-test="label-acompanhe-plantacao">Acompanhe sua plantação</p>
          <form onSubmit={handleSignIn}>
            <label>Email:</label>
            <input
              type="text"
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
            <Button type="submit">Entrar na aplicação</Button>
          </form>
          <div className="separator">Ou entre com o Google</div>
          <button onClick={handleSignInWithGoogle} className="button-google">
            <img src={googleIcon} alt="Logo do Google" />
            Entrar com o Google
          </button>
          <footer>
            <div className="footer">
              <p
                className="label-without-account"
                data-test="label-without-account"
              >
                Não tem conta?
              </p>
              <Link className="link-register" to="/cadastro">
                Cadastre-se
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
