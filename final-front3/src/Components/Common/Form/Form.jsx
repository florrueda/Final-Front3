import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [data, setData] = useState({
    name: '',
    email: ''
  });

  const [error, setError] = useState(false)

  const [submitMessage, setSubmitMessage] = useState(false)

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailIsValid = data.email.includes('@');
    const nameIsValid = data.name.length > 5

    if(!nameIsValid || !emailIsValid) {
      setError(true)
    }

    setSubmitMessage(true)
    console.log("Se envio y los datos son:" , data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <input type='text' name='name' placeholder="Nombre completo" onChange={handleChange}></input>
       <input type='email' name='email' placeholder="Email" onChange={handleChange}></input>
       {
        error  && <span style={{color: "red" , fontSize: "1rem"}}>Por favor verifique su información nuevamente</span>
       }
       <button type='submit'>Enviar</button>
       {
        submitMessage && <span style={{color: "red" , fontSize: "1rem"}}>Gracias {data.name}, te contactaremos cuando antes vía mail</span>
       }
      </form>
    </div>
  );
};

export default Form;

// Pagina 2: Contacto
// En esta pagina deberán implementar un Form (con sus validaciones pertinentes) que capture la información del usuario que desea contactar con la empresa. Los campos serán los siguientes:

// Nombre completo (con longitud mayor a 5)
// Email (con formato correcto de email)
// En caso de haber un error mostrar el siguiente mensaje de error: Por favor verifique su información nuevamente
// Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados) el formulario deberán mostrar un mensaje de éxito que contenga el siguiente formato: Gracias [nombre del usuario], te contactaremos cuando antes vía mail