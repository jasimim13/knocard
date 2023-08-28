import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./styles.css";

export const Logo = () => {
  return (
    <AppBar sx={{ mt: 8, backgroundColor: "white", height: "50px" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <div className="name-container">
            <Typography sx={{ color: "rgb(8, 138, 198)", fontWeight: "700" }}>
              Regional Fashion CEO
            </Typography>
          </div>
          <div className="overlay-container">
            <Typography sx={{ color: "white", fontWeight: "600" }}>
              Monika Perez
            </Typography>
          </div>
        </Box>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "black" }}>Your Logo</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
