import { Link, useHistory } from "react-router-dom";

import alface from "../assets/images/alface.png";
import googleIcon from "../assets/images/googleIcon.svg";
import { Button } from "../components/Button";

import "../styles/autenticacao.scss";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { useCultura } from "../hooks/useCulture";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle, signInWithEmailAndPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loadCulturas } = useCultura();

  async function handleSignInWithGoogle(event: FormEvent) {
    event.preventDefault();
    await signInWithGoogle();
    const culturas = await loadCulturas(user!.id);
    history.push("/novaCultura");
    if (culturas && culturas.length > 0) {
      history.push("/dashboard");
    } else {
      history.push("/novaCultura");
    }
  }

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    await loadCulturas(user!.id);
    history.push("/novaCultura");
    const culturas = await loadCulturas(user!.id);
    if (culturas && culturas.length > 0) {
      history.push("/dashboard");
    } else {
      history.push("/novaCultura");
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
