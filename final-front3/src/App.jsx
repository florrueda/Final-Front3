import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import Favs from "./Components/Pages/Favs/Favs";
import Contact from "./Components/Pages/Contact/Contact";
import DentistsContainer from "./Components/Pages/Dentists/Dentists.container";
import DentistDetailContainer from "./Components/Pages/DentistDetail/DentistDetail.container";
import { GlobalContext } from "./Context/GlobalContext";

function App() {

  const {state} = useContext(GlobalContext);

  return (
    <div className={state.isDark ? "dark" : "light"}>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/dentistas"
                element={<DentistsContainer />}
              />

              <Route path="/dentista/:id" element={<DentistDetailContainer />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
            </Route>

            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
