import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./modules/Navigation";
import { mainRoutes } from "./constants";
import { FormContainer } from "./modules/Form";
import { GeneralForm } from "./pages/GeneralForm/GeneralForm";
import { OwnershipForm } from "./pages/OwnershipForm/OwnershipForm";
import { RegistrationAddressForm } from "./pages/RegistrationAddressForm/RegistrationAddressForm";
import { ResidentialAddressForm } from "./pages/ResidentialAddressForm/ResidentialAddressForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <FormContainer>
            <Routes>
              <Route
                path={mainRoutes[0].url}
                element={<GeneralForm />}
                key={mainRoutes[0].id}
              />
              <Route
                path={mainRoutes[1].url}
                element={<OwnershipForm />}
                key={mainRoutes[1].id}
              />
              <Route
                path={mainRoutes[2].url}
                element={<RegistrationAddressForm />}
                key={mainRoutes[2].id}
              />
              <Route
                path={mainRoutes[3].url}
                element={<ResidentialAddressForm />}
                key={mainRoutes[3].id}
              />
            </Routes>
        </FormContainer>
      </div>
    </Router>
  );
}

export default App;
