import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Main from "../../assets/MainLogo.jpeg";
import "./styles.css";

export const Logo = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {!isSmallScreen ? (
        <AppBar position="relative"  sx={{  backgroundColor: "white", height: "50px" }}>
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
                <Typography
                  sx={{ color: "rgb(8, 138, 198)", fontWeight: "700" }}
                >
                  KnoCard CEO
                </Typography>
              </div>
              <div className="overlay-container">
                <Typography sx={{ color: "white", fontWeight: "600" }}>
                  Rob Pickering
                </Typography>
              </div>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <img src={Main} alt="Main" height="60px" width="140px" />
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="relative" sx={{ backgroundColor: "white", height: "50px" }}>
          <Toolbar>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <img src={Main} alt="Main" height="50px" width="120px" />
            </div>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};
