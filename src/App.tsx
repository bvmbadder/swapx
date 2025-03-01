import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Provider } from "./components/ui/provider";
import Functionalities from "./pages/Functionalities";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/functionalities" element={<Functionalities />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
