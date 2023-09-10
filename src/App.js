import { Navbar } from "./components/Navbar/Navbar";
import { Logo } from "./components/Logo Container/Logo";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BG from "../src/assets/bg_picture.jpeg";
import Adv from "../src/assets/Advertisement bg.jpeg";
import Yacht from "../src/assets/Yacht.jpg";
import Typography from "@mui/material/Typography";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PersonIcon from "@mui/icons-material/Person";
import PhotoIcon from "@mui/icons-material/Photo";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import pic from "../src/assets/45.png";
import Phone from "../src/assets/Phone.png";
import Mail from "../src/assets/Mail.png";
import Location from "../src/assets/Location.png";
import Brief from "../src/assets/Briefcase.png";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

  const handleClick = (index) => {
    setClickedButtonIndex(index);
  };

  const buttonData = [
    { text: "Contact", color: "rgb(8, 138, 198)", icon: <PersonIcon /> },
    { text: "Media", color: "rgb(8, 138, 198)", icon: <PhotoIcon /> },
    {
      text: "Social",
      color: "rgb(8, 138, 198)",
      icon: <SentimentSatisfiedAltIcon />,
    },
    { text: "Links", color: "rgb(8, 138, 198)", icon: <InsertLinkIcon /> },
    { text: "Partners", color: "rgb(8, 138, 198)", icon: <HandshakeIcon /> },
  ];

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
      <Navbar />
      <Logo />
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <div
            className={` ${
              isSmallScreen ? "avatar-container" : "large-avatar-container"
            }`}
          >
            <Avatar
              alt="profile picture"
              sx={{
                width: "120px",
                height: "120px",
                marginBottom: "25px",
                "@media (max-width: 900px)": {
                  width: "70px",
                  height: "70px",
                },
              }}
              className={`${isSmallScreen ? "avatar" : ""}`}
            >
              <img
                src={pic}
                alt="profile pic"
                style={{
                  width: "95%",
                  height: "95%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "2px solid white",
                  backgroundColor: "lightgray",
                }}
              />
            </Avatar>
          </div>

          {isSmallScreen && (
            <div
              style={{
                width: "auto",
                height: "45px",
                backgroundColor: "rgb(8, 138, 198)",
                position: "relative",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  paddingLeft: "120px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Rob Pickering
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "left",
                  paddingLeft: "120px",
                  color: "rgb(185, 187, 186)",
                }}
              >
                KNOCARD CEO
              </Typography>
            </div>
          )}

          {!isSmallScreen && (
            <div>
              <Box sx={{ display: "flex", width: "140px" }}>
                <img src={Phone} alt="Phone" height="30px" width="33px" />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgb(8, 138, 198)",
                    marginTop: "7px",
                    marginLeft: "3px",
                  }}
                >
                  2167899100
                </Typography>
              </Box>
              <Box sx={{ display: "flex", width: "140px" }}>
                <img
                  src={Mail}
                  height="30px"
                  width="33px"
                  alt="Mail"
                  style={{ marginRight: "2px" }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ color: "rgb(8, 138, 198)", marginTop: "6px" }}
                >
                  Rob@knocard.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", width: "150px" }}>
                <img
                  src={Location}
                  height="28px"
                  width="29px"
                  alt="Location"
                  style={{ marginLeft: "2px" }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgb(8, 138, 198)",
                    marginLeft: "3px",
                    marginTop: "3px",
                  }}
                >
                  Macedonia, Ohio
                </Typography>
              </Box>
              <Box sx={{ display: "flex", width: "150px" }}>
                <img src={Brief} height="29px" width="31px" alt="Brief" />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgb(8, 138, 198)",
                    marginLeft: "3px",
                    marginTop: "3px",
                  }}
                >
                  Founder and CEO
                </Typography>
              </Box>
              <Box sx={{ display: "flex", width: "140px" }}>
                <AccessTimeRoundedIcon
                  sx={{
                    color: "gold",
                    marginLeft: "3px",
                    height: "25px",
                    width: "25px",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgb(8, 138, 198)",
                    marginLeft: "4px",
                    marginTop: "2px",
                  }}
                >
                  Joined Jan 2013
                </Typography>
              </Box>
            </div>
          )}

          {!isSmallScreen && (
            <Box
              gap={1}
              sx={{
                mt: 5,
              }}
            >
              <div className="hover-div">
                <PersonIcon
                  fontSize="large"
                  sx={{
                    marginLeft: "10px",
                    color: "#f57c00",
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: "3px",
                    paddingLeft: "30px",
                    fontWeight: "bold",
                    color: "rgb(8, 138, 198)",
                    fontSize: "18px",
                  }}
                >
                  Contact
                </Typography>
              </div>
              <div className="hover-div">
                <PhotoIcon
                  fontSize="large"
                  sx={{
                    marginLeft: "10px",
                    color: "#f57c00",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: "3px",
                    paddingLeft: "30px",
                    fontWeight: "bold",
                    color: "rgb(8, 138, 198)",
                    fontSize: "18px",
                  }}
                >
                  Media
                </Typography>
              </div>
              <div className="hover-div">
                <SentimentSatisfiedAltIcon
                  fontSize="large"
                  sx={{
                    marginLeft: "10px",
                    color: "#f57c00",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: "3px",
                    paddingLeft: "30px",
                    fontWeight: "bold",
                    color: "rgb(8, 138, 198)",
                    fontSize: "18px",
                  }}
                >
                  Social
                </Typography>
              </div>
              <div className="hover-div">
                <InsertLinkIcon
                  fontSize="large"
                  sx={{
                    marginLeft: "10px",
                    color: "#f57c00",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: "3px",
                    paddingLeft: "30px",
                    fontWeight: "bold",
                    color: "rgb(8, 138, 198)",
                    fontSize: "18px",
                  }}
                >
                  Links
                </Typography>
              </div>
              <div className="hover-div">
                <HandshakeIcon
                  fontSize="large"
                  sx={{
                    marginLeft: "10px",
                    color: "#f57c00",
                    width: "30px",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: "3px",
                    paddingLeft: "33px",
                    fontWeight: "bold",
                    color: "rgb(8, 138, 198)",
                    fontSize: "18px",
                  }}
                >
                  Partners
                </Typography>
              </div>
            </Box>
          )}
        </Grid>

        {isSmallScreen && (
          <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
            <Grid item xs={12}>
              <Box
                gap={1}
                sx={{
                  marginTop: "1px",
                  width: "100vw",
                  paddingLeft: "10px",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {buttonData.map((button, index) => (
                  <Button
                    key={index}
                    onClick={() => handleClick(index)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textTransform: "none",
                      color:
                        clickedButtonIndex === index ? "#f57c00" : button.color,
                    }}
                  >
                    {React.cloneElement(button.icon, {
                      sx: {
                        color:
                          clickedButtonIndex === index
                            ? "#f57c00"
                            : button.color,
                      },
                    })}
                    {button.text}
                  </Button>
                ))}
              </Box>
            </Grid>
          </div>
        )}

        <Grid item xs={12} md={7}>
          <Paper className="middle-section">
            <img
              alt="Yacht"
              src={Yacht}
              height="300px"
              width="100%"
              className="Yacht"
            />
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {isSmallScreen && (
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Paper
                    className="middle-column"
                    variant="outlined"
                    sx={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      width: "100%",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="heading">
                        <Typography variant="body2">Info</Typography>
                      </div>
                    </div>
                    <Box sx={{ display: "flex", width: "140px" }}>
                      <img src={Phone} alt="Phone" height="30px" width="33px" />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "rgb(8, 138, 198)",
                          marginTop: "7px",
                          marginLeft: "3px",
                        }}
                      >
                        2167899100
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "140px" }}>
                      <img
                        src={Mail}
                        height="30px"
                        width="33px"
                        alt="Mail"
                        style={{ marginRight: "2px" }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "rgb(8, 138, 198)", marginTop: "6px" }}
                      >
                        Rob@knocard.com
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "150px" }}>
                      <img
                        src={Location}
                        height="28px"
                        width="29px"
                        alt="Location"
                        style={{ marginLeft: "2px" }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "rgb(8, 138, 198)",
                          marginLeft: "3px",
                          marginTop: "3px",
                        }}
                      >
                        Macedonia, Ohio
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "150px" }}>
                      <img src={Brief} height="29px" width="31px" alt="Brief" />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "rgb(8, 138, 198)",
                          marginLeft: "3px",
                          marginTop: "3px",
                        }}
                      >
                        Founder and CEO
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "140px" }}>
                      <AccessTimeRoundedIcon
                        sx={{
                          color: "gold",
                          marginLeft: "3px",
                          height: "25px",
                          width: "25px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "rgb(8, 138, 198)",
                          marginLeft: "4px",
                          marginTop: "2px",
                        }}
                      >
                        Joined Jan 2013
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              )}
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  className="middle-column"
                  variant="outlined"
                  sx={{
                    border: "1px solid lightgrey",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="heading">
                      <Typography variant="body2">Media</Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      sx={{
                        maxWidth: "auto",
                        mt: 2,
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <CardMedia
                        sx={{ height: 80 }}
                        image={require("../src/assets/Yacht.jpg")}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      sx={{
                        maxWidth: "auto",
                        my: 2,
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <CardMedia
                        sx={{ height: 80 }}
                        image={require("../src/assets/Yacht.jpg")}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  className="middle-column"
                  variant="outlined"
                  sx={{
                    border: "1px solid lightgrey",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="heading">
                      <Typography variant="body2">Posts</Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      sx={{
                        maxWidth: "auto",
                        my: 2,
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <CardMedia
                        sx={{ height: 80 }}
                        image={require("../src/assets/Yacht.jpg")}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      sx={{
                        maxWidth: "auto",
                        my: 2,
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <CardMedia
                        sx={{ height: 80 }}
                        image={require("../src/assets/Yacht.jpg")}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Paper
                      className="right-row"
                      variant="outlined"
                      sx={{
                        border: "1px solid lightgrey",
                        borderRadius: "10px",
                        width: "100%",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div className="heading">
                          <Typography variant="body2">My Links</Typography>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            my: 1,
                            color: "black",
                            borderColor: "#01579b",
                            borderWidth: "2px",
                            borderRadius: "20px",
                            fontWeight: "500",
                            zIndex: 900,
                            textALign: "justify",
                            fontSize: "11px",
                          }}
                          startIcon={
                            <ShoppingCartIcon sx={{ color: "gold" }} />
                          }
                        >
                          Shop and Earn
                        </Button>
                      </div>
                      <Typography
                        variant="caption"
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        Shop and earn gives you the ability to
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            my: 1,
                            color: "black",
                            borderColor: "#01579b",
                            borderWidth: "2px",
                            borderRadius: "20px",
                            fontWeight: "500",
                            width: "auto",
                            fontSize: "11px",
                            zIndex: 900,
                          }}
                          startIcon={
                            <CurrencyExchangeIcon sx={{ color: "green" }} />
                          }
                        >
                          Sign In
                        </Button>
                      </div>
                      <Typography
                        variant="caption"
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        Sign and Checkout commissions in
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Paper
                      className="right-row"
                      variant="outlined"
                      sx={{
                        border: "1px solid lightgrey",
                        borderRadius: "10px",
                        width: "100%",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div className="heading">
                          <Typography variant="body2">
                            Preferred Partners
                          </Typography>
                        </div>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Card
                          sx={{
                            maxWidth: "auto",
                            my: 2,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <CardMedia
                            sx={{ height: 80 }}
                            image={require("../src/assets/Yacht.jpg")}
                            title="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {!isSmallScreen && (
          <Grid item xs={3}>
            <Paper className="right-section">
              <div className="image-container">
                <img src={Adv} alt="Background" className="background-image" />
                <div className="foreground-container">
                  <img src={BG} alt="Overlay" className="overlay-image" />
                </div>
              </div>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
