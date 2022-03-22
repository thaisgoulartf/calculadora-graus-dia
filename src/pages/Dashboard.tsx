import { User } from "../components/User";
import { Graph } from "../components/Graph";
import "../styles/dashboard.scss";
import "../styles/grafico.scss";
import "../styles/sidebar.scss";
import milho from "../assets/images/corn-aside.png";
import { FaBars } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { CultureTab } from "../components/CultureTab";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";
import { useCultureContext } from "../hooks/useCultureContext";
import { Day, ForecastCard } from "../components/ForecastCard";
import { useEffect } from "react";
import { useCurrentCulture } from "../hooks/useCurrentCulture";

export function Dashboard() {
  const history = useHistory();
  const { cultures } = useCultureContext();
  const { currentCulture, updateCurrentCulture } = useCurrentCulture();

  useEffect(() => {
    if (cultures && cultures.length > 0) {
      if (!currentCulture) updateCurrentCulture(cultures[0]);
    }
  }, []);

  async function navigateToCreateNovaCultureModal() {
    history.push("/nova-cultura-modal");
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
        <div>
          <Button
            type="button"
            data-test="button-adicionar-cultura"
            onClick={navigateToCreateNovaCultureModal}
          >
            <div className="iconButton">{<FiPlus />}</div>
            <span>Adicionar Cultura</span>
          </Button>
        </div>
        <div className="sidebar-menu">
          {cultures?.map((culture) => (
            <CultureTab culture={culture} key={culture.id} />
          ))}
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1 data-test="label-dashboard">
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
            <ForecastCard day={Day.today} />
            <ForecastCard day={Day.tomorrow} />
          </div>
          <div className="grafico">
            <Graph />
          </div>
        </main>
      </div>
    </div>
  );
}
