import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Register } from "./pages/Register";


import { NewCulture } from "./pages/NewCulture";
import { NewCultureModal } from "./pages/NewCultureModal";
import { CultureContextProvider } from "./contexts/CultureContext";
import { CurrentCultureContextProvider } from "./contexts/CurrentCultureContext";
import { EditCultureModal } from "./pages/EditCultureModal";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CultureContextProvider>
          <CurrentCultureContextProvider>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/cadastro" component={Register} />
              <Route path="/nova-cultura" component={NewCulture} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/nova-cultura-modal" component={NewCultureModal} />
              <Route
                path="/edit-cultura-modal/:id"
                component={EditCultureModal}
              />
            </Switch>
          </CurrentCultureContextProvider>
        </CultureContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
