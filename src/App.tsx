import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NovaCultura } from "./pages/NovaCultura";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ModalNovaCultura } from "./pages/ModalNovaCultura";
import { Cadastro } from "./pages/Cadastro";
import { CulturaContextProvider } from "./contexts/CulturaContext";
import { ModalEditCultura } from "./pages/ModalEditCultura";
import { CurrentCulturaContextProvider } from "./contexts/CurrentCulturaContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CulturaContextProvider>
          <CurrentCulturaContextProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/novaCultura" component={NovaCultura} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/novaCulturaModal" component={ModalNovaCultura} />
              <Route
                path="/editCulturaModal/:id"
                component={ModalEditCultura}
              />
            </Switch>
          </CurrentCulturaContextProvider>
        </CulturaContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
