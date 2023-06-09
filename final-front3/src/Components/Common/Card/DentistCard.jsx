import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const DentistCard = ({ users, dispatch, favs }) => {
  return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              {users.name.split("")[0]}
            </Avatar>
          }
          title={users.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={
            "https://res.cloudinary.com/drzyncm5r/image/upload/v1680836029/doctor_ml6xtf.jpg"
          }
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => dispatch({ type: "HANDLE_FAVORITE", payload: users })}
            style={{backgroundColor: "white"}}
          >
            <FavoriteIcon
              color={
                favs.some((fav) => fav.id === users.id) ? "error" : "disabled"
              }
            />
          </IconButton>
          <Link to={`/dentista/${users.id}`}>
            <Button variant="contained">Ver detalle</Button>
          </Link>
        </CardActions>
      </Card>
  );
};

export default DentistCard;
