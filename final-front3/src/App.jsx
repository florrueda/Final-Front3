import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import Favs from "./Components/Pages/Favs/Favs";
import DentistDetail from "./Components/Pages/DentistDetail/DentistDetail";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/dentist/:id"
              element={<DentistDetail />}
            />
            <Route path="/favs" element={<Favs />} />
          </Route>

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
