import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="favs-grid">
        {state.favs.map((fav) => (
          <Card sx={{ width: 300, textAlign: "center" }} key={fav.id}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://res.cloudinary.com/drzyncm5r/image/upload/v1680836029/doctor_ml6xtf.jpg"
              title={fav.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {fav.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {fav.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Telefono: {fav.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pagina web: {fav.website}
              </Typography>
            </CardContent>
            <IconButton
              aria-label="add to favorites"
              onClick={() =>
                dispatch({ type: "HANDLE_FAVORITE", payload: fav })
              }
              style={{ backgroundColor: "white" }}
            >
              <FavoriteIcon
                color={
                  state.favs.some((favorite) => favorite.id === fav.id)
                    ? "error"
                    : "disabled"
                }
              />
            </IconButton>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Favs;
