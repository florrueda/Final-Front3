import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const [themeButton, setThemeButton] = useState(false);

  const changeTheme = () => {
    setThemeButton(!themeButton)
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="navlinks">
        <NavLink to="/home" className='navlink'>
          Home
        </NavLink>
        <NavLink to="/favs" className='navlink'>
          Favoritos
        </NavLink>
        <NavLink to="/contact" className='navlink'>
          Contacto
        </NavLink>
        </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar