import { CardToday } from "../components/CardToday";
import { CardTomorrow } from "../components/CardTomorrow";
import { User } from "../components/User";
import { Grafico } from "../components/Grafico";
import "../styles/dashboard.scss";
import "../styles/grafico.scss";
import "../styles/sidebar.scss";
import milho from "../assets/images/corn-aside.png";
import { FaBars } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

import { CultureTab } from "../components/CultureTab";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
// import { Cultura } from "./NovaCultura";
import { useCultura } from "../hooks/useCulture";
import { calculate } from "../util/function_utils";

// import { ThumbsUpIcon } from 'react-line-awesome'

export function Dashboard() {
  const history = useHistory();
  const { culturas } = useCultura();

  useEffect(() => {}, []);

  async function navigateToCreateNovaCulturaModal() {
    history.push("/novaCulturaModal");
  }

  async function testeCalculateGrausDias() {
    if (culturas!) {
      calculate(culturas![0]);
    }
  }

  return (
    <div>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <span>
            <img className="imagem-milho" src={milho} alt="Milho" />
          </span>
          <h2>Calculadora Graus dias</h2>
        </div>
        <div className="buttonAdicionarCultura">
          <Button type="button" onClick={navigateToCreateNovaCulturaModal}>
            <div className="iconButton">{<FiPlus />}</div>
            <span>Adicionar Cultura</span>
          </Button>
          {/* <ButtonTeste /> */}
        </div>
        <div className="sidebar-menu">
          {culturas?.map((cultura) => (
            <CultureTab cultura={cultura} key={cultura.id} />
          ))}
          {/* <li>
              <a className="active">
                <GiJellyBeans />
                <span className="labelCultura">Feijão</span>
                <span className="edit">{<BiEditAlt />}</span>
                <span className="trash">{<BsTrash />}</span>
              </a>
            </li> */}
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1>
            <label htmlFor="nav-toggle">
              <span>
                <FaBars />
              </span>
            </label>
            Dashboard
          </h1>
          <User />
        </header>
        <main>
          <div className="card">
            <CardToday day="Hoje" />
            <CardTomorrow day="Amanhã" />
          </div>
          <div className="grafico">
            <Grafico />
          </div>
        </main>
      </div>
    </div>
  );
}
