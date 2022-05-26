import "./App.css";
import "./assets/css/style.css";
import "./assets/css/cars.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import RentalCar from "./page/RentalCar"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cars" element={<RentalCar />} />
      </Routes>
    </Router>
  );
}

export default App;
