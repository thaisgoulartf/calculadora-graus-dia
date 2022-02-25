import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NovaCultura } from "./pages/NovaCultura";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ModalNovaCultura } from "./pages/ModalNovaCultura";
import { Cadastro } from "./pages/Cadastro";
import { CulturaContextProvider } from "./contexts/CulturaContext"

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CulturaContextProvider>
          {/* {/* mudar pra Home login depois de criar landpage */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/novaCultura" exact component={NovaCultura} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/novaCulturaModal" exact component={ModalNovaCultura} />
          </Switch>
          {/* <Route path="/consultas" component={Consultas} /> */}
        </CulturaContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;