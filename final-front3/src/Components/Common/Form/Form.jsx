import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Swal from 'sweetalert2'

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState(false);

  const [submitMessage, setSubmitMessage] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailIsValid = data.email.includes("@") > 0;
    const nameIsValid = data.name.length > 5;

    if (!nameIsValid || !emailIsValid) {
      setError(true);
    } else {
      setError(false);
      setSubmitMessage(true);
      console.log("Se envio y los datos son:", data);
    }
  };

  const submitMessageAlert = () => {
    Swal.fire({
      title: `Gracias ${data.name}, te contactaremos cuando antes vía mail`,
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div id='form'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Nombre completo"
          name="name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          onChange={handleChange}
        />
        {error && (
          <span style={{ color: "red", fontSize: "1rem" }}>
            Por favor verifique su información nuevamente
          </span>
        )}
        <Button variant="contained" type='submit'>Enviar</Button>
        {submitMessage && submitMessageAlert()}
      </form>
    </div>
  );
};

export default Form;
