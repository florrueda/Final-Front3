import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";
import './Home.css'
import { Button } from "@mui/material";

const Home = () => {

  const {state} = useContext(GlobalContext)

  return (
    <main className={state.isDark ? "container-dark" : "container-light"}>
      <h1>Home</h1>
      <div className="card-grid">
        <Link to="/dentistas">
          <Button variant="contained">Ir a los dentistas</Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
