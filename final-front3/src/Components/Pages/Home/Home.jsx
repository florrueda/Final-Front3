import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {

  return (
    <div >
      <h1>Home</h1>
      <div className="card-grid">
        <Link to="/dentistas">
          <Button variant="contained">Ir a los dentistas</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
