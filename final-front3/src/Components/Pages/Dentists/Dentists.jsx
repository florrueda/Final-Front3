import React from "react";
import DentistCard from "../../Common/Card/DentistCard";
import { Grid } from "@mui/material";

const Dentists = ({ users, dispatch, favs }) => {
  return (
    <div>
      <h1>Dentistas</h1>
      <div className="favs-grid">
        
          {users.map((user) => (
            <Grid item margin={2} key={user.id}>
            <DentistCard
              users={user}
              dispatch={dispatch}
              favs={favs}
            ></DentistCard>
                    </Grid>
          ))}

      </div>
    </div>
  );
};

export default Dentists;
