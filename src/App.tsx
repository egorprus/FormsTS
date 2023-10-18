import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./modules/Navigation";
import { mainRoutes } from "./constants";
import { FormContainer } from "./modules/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <FormContainer>
          <Routes>
            {mainRoutes.map((route) => (
              <Route
                path={route.url}
                element={route.component}
                key={route.id}
              />
            ))}
          </Routes>
        </FormContainer>
      </div>
    </Router>
  );
}

export default App;
