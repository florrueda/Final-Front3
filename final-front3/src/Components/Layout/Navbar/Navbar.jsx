import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContext(GlobalContext)

  const changeTheme = () => {
    dispatch({type: "SWITCH_MODE"})
    console.log(state.isDark);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h2>Digital House</h2>
      <nav style={{ display: "flex", alignItems: "center" }}>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}

        <div className="navlinks">
          <NavLink
            to="/"
            className="navlink"
            style={{ margin: "1rem", textAlign: "center" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/dentistas"
            className="navlink"
            style={{ margin: "1rem", textAlign: "center" }}
          >
            Dentistas
          </NavLink>
          <NavLink
            to="/favs"
            className="navlink"
            style={{ margin: "1rem", textAlign: "center" }}
          >
            Favoritos
          </NavLink>
          <NavLink
            to="/contacto"
            className="navlink"
            style={{ margin: "1rem", textAlign: "center" }}
          >
            Contacto
          </NavLink>
        </div>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={changeTheme}>Cambiar tema</button>
      </nav>
    </div>
  );
};

export default Navbar;
