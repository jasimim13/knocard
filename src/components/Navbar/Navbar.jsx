import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Nav from "../../assets/NavLogo.jpeg"
import { RiStarSFill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <AppBar position="relative"  sx={{ backgroundColor: "#005580" }}>
      <Toolbar>
        <img src={Nav} alt="NavPic" height="50px" width="50px" style={{marginRight: "10px"}} />

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography variant="body2">KnoCard</Typography>
          <Typography variant="caption" sx={{fontSize: "10px"}} >
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
