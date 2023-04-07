import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import Favs from "./Components/Pages/Favs/Favs";
import Contact from "./Components/Pages/Contact/Contact";
import GlobalContextProvider from "./Context/GlobalContext";
import DentistsContainer from "./Components/Pages/Dentists/Dentists.container";
import DentistDetailContainer from "./Components/Pages/DentistDetail/DentistDetail.container";

function App() {


  return (
    <div>
      <BrowserRouter>
        <GlobalContextProvider>
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
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
