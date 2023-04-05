import React from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        <Link to="/dentistas">
          <button>Ir a los dentistas</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
