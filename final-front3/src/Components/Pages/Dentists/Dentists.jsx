import React from "react";
import DentistCard from "../../Common/Card/DentistCard";
import { Grid } from "@mui/material";

const Dentists = ({ users, dispatch, favs }) => {
  return (
    <div>
      <h1>Dentistas</h1>
      <Grid container margin={4}>
        
          {users.map((user) => (
            <Grid item xs={2} sm={4} md={4} marginBottom={4}>
            <DentistCard
              key={user.id}
              users={user}
              dispatch={dispatch}
              favs={favs}
            ></DentistCard>
                    </Grid>
          ))}

      </Grid>
    </div>
  );
};

export default Dentists;
