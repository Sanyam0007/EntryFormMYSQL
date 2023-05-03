import React from "react";
import { Typography, Grid, Container, Button, TextField } from "@mui/material";

export const Login = () => {
  return (
    <div>
      <Typography variant="h3" style={{ margin: "5px", textAlign: "center" }}>
        Login
      </Typography>
      <Container
        style={{
          marginTop: "50px",
          width: "400px",
          border: "1px solid black",
          padding: "30px",
          borderRadius: "8px",
          alignContent: "centre",
          alignItems: "centre",
          justifyContent: "centre",
          background: "linear-gradient(to right, white ,aqua)",
        }}
      >
        <Grid>
          <TextField
            label="Email"
            style={{ margin: "10px" }}
            variant="outlined"
            fullWidth
            // onChange={handleEmail}
          />
        </Grid>
        <Grid>
          <TextField
            label="Password"
            variant="outlined"
            style={{ margin: "10px" }}
            type="password"
            // value={password}
            fullWidth
            // onChange={handlePassword}
          />
        </Grid>
        <Grid>
          <Button
            variant="contained"
            // onClick={handleSubmit}
            style={{ marginTop: "25px" }}
          >
            Login
          </Button>
        </Grid>
        <Typography style={{ marginTop: "4px" }}>Not a user?</Typography>
        <Button>signup</Button>
      </Container>
    </div>
  );
};
