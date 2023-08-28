import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { DiCssdeck } from "react-icons/di";
import { RiStarSFill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#005580"}}>
      <Toolbar>
        <DiCssdeck size="2rem" style={{ marginRight: "10px" }} />

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography variant="body2">KnoCard</Typography>
          <Typography variant="subtitle2">
            Your all in one business platform
          </Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <RiStarSFill style={{ color: "yellow" }} />
            <RiStarSFill style={{ color: "yellow" }} />
            <RiStarSFill style={{ color: "yellow" }} />
            <RiStarSFill style={{ color: "yellow" }} />
            <RiStarSFill style={{ color: "yellow" }} />
          </div>
        </Box>

        <Button
          variant="contained"
          color="inherit"
          sx={{
            backgroundColor: "#00cc00",
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          Get KnoCard
        </Button>
      </Toolbar>
    </AppBar>
  );
};
