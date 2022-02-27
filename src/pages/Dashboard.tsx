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
import { useCurrentCultura } from "../hooks/useCurrentCultura";
import { useCulturaContext } from "../hooks/useCulturaContext";
import { Day, ForecastCard } from "../components/ForecastCard";

export function Dashboard() {
  const history = useHistory();
  const { culturas } = useCulturaContext();
  const { currentCultura, updateCurrentCultura } = useCurrentCultura();

  if (culturas && culturas.length > 0) {
    if (!currentCultura) updateCurrentCultura(culturas[0]);
  }

  async function navigateToCreateNovaCulturaModal() {
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
          <Button type="button" onClick={navigateToCreateNovaCulturaModal}>
            <div className="iconButton">{<FiPlus />}</div>
            <span>Adicionar Cultura</span>
          </Button>
        </div>
        <div className="sidebar-menu">
          {culturas?.map((cultura) => (
            <CultureTab cultura={cultura} key={cultura.id} />
          ))}
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
            <ForecastCard day={Day.today} />
            <ForecastCard day={Day.tomorrow} />
          </div>
          <div className="grafico">
            <Grafico />
          </div>
        </main>
      </div>
    </div>
  );
}
