import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const index: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Typography
        sx={{ background: "orange", textAlign: "center" }}
        variant="h5"
      >
        Demo for connection
      </Typography>

      <Box>
        <Typography 
          sx={{
            marginLeft: "30px",
          }}
          variant="h6"
        >
          Create User
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <form>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              margin: "2rem",
            }}
          >
            <Box sx={{ display: "flex", gap: ".5rem" }}>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="fname" />
            </Box>
            <Box sx={{ display: "flex", gap: ".5rem" }}>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lname" />
            </Box>
            <Box sx={{ display: "flex", gap: ".5rem" }}>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
            </Box>
            {/* Submit */}
            <Box sx={{ display: "flex", gap: ".5rem", cursor: "pointer" }}>
              <input type="submit" id="submit" name="Create User" />
            </Box>
          </Box>
        </form>
        <Box
          sx={{
            background: "pink",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5">Users Created</Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "magenta",
            }}
            variant="h3"
          >
            0
          </Typography>
          <Button variant="contained">Get All the users</Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default index;
