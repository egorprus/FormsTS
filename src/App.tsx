import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./modules/Navigation";
import { FormContainer } from "./modules/Form";
import { mainRoutes } from "./constants/mainRoutes";

function App() {
  return (
    <Router>
      <div className="App">
				<div className="container">
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
      </div>
    </Router>
  );
}

export default App;
