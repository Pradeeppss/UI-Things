import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Buttons from "./pages/buttons/Buttons";
import Cards from "./pages/cards/Cards";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </main>
  );
}

export default App;
