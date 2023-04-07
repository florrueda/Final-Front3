import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const DentistDetail = ({ state }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card sx={{ maxWidth: 345, textAlign: "center" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://res.cloudinary.com/drzyncm5r/image/upload/v1680836029/doctor_ml6xtf.jpg"
          title={state.user.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {state.user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {state.user.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Telefono: {state.user.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pagina web: {state.user.website}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DentistDetail;
