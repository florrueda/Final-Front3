import React from "react";
import Form from "../../Common/Form/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div id="contact">
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
