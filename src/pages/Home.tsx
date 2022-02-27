import { Link, useHistory } from "react-router-dom";

import alface from "../assets/images/alface.png";
import googleIcon from "../assets/images/googleIcon.svg";
import { Button } from "../components/Button";

import "../styles/autenticacao.scss";
import { useAuthContext } from "../hooks/useAuthContext";
import { FormEvent, useState } from "react";
import { useCulturaContext } from "../hooks/useCulturaContext";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle, signInWithEmailAndPassword } =
    useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loadCulturas } = useCulturaContext();

  async function handleSignInWithGoogle(event: FormEvent) {
    event.preventDefault();
    await signInWithGoogle();
    const culturas = await loadCulturas(user!.id);
    history.push("/nova-cultura");
    if (culturas && culturas.length > 0) {
      history.push("/dashboard");
    } else {
      history.push("/nova-cultura");
    }
  }

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    await loadCulturas(user!.id);
    history.push("/nova-cultura");
    const culturas = await loadCulturas(user!.id);
    if (culturas && culturas.length > 0) {
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
          <p>Acompanhe sua plantação</p>
          <form onSubmit={handleSignIn}>
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <input
              type="text"
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
              <p className="label1">Não tem conta? </p>
              <Link className="label2" to="/cadastro">
                {" "}
                Cadastre-se{" "}
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
