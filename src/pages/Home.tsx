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
    // if (!user) {
    await signInWithGoogle();
    await loadCulturas(user!.id);
    // }
    history.push("/novaCultura");
  }

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    // if (!user) {
    console.log('111')
    await signInWithEmailAndPassword(email, password)
    await loadCulturas(user!.id);
    // }
    history.push("/novaCultura");
  }

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       history.push("/novaCultura");
  //     }
  //   });
  // });

  // async function handleSignIn() {
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       history.push("/novaCultura");
  //     })
  //     .catch((err) => alert(err.message));
  // }

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
