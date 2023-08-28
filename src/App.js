import { Navbar } from "./components/Navbar/Navbar";
import { Logo } from "./components/Logo Container/Logo";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PP from "../src/assets/picture.png";
import BG from "../src/assets/bg_picture.jpeg";
import iPhone from "../src/assets/iPhone.png";
import Adv from "../src/assets/Advertisement bg.jpeg";
import Yacht from "../src/assets/Yacht.jpg";
import Typography from "@mui/material/Typography";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import PersonIcon from "@mui/icons-material/Person";
import PhotoIcon from "@mui/icons-material/Photo";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Container maxWidth="xl" className="app-container">
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Paper className="left-section">
              <div className="centered-content">
                <Avatar
                  alt="profile picture"
                  src={PP}
                  sx={{
                    width: "100px",
                    height: "100px",
                    marginBottom: "25px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "19px" }}>
                <Box sx={{ display: "flex" }}>
                  <div className="circular-container">
                    <PhoneRoundedIcon
                      sx={{ marginRight: "10px", color: "green" }}
                    />
                  </div>

                  <Typography
                    variant="subtitle2"
                    sx={{ color: "rgb(8, 138, 198)" }}
                  >
                    2167899100
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <EmailRoundedIcon
                    sx={{ marginRight: "10px", color: "#01579b" }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "rgb(8, 138, 198)" }}
                  >
                    Rob@knocard.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <PlaceRoundedIcon
                    sx={{ marginRight: "10px", color: "red" }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "rgb(8, 138, 198)" }}
                  >
                    Macedonia, Ohio
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <BusinessCenterRoundedIcon
                    sx={{ marginRight: "10px", color: "darkblue" }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "rgb(8, 138, 198)" }}
                  >
                    Founder and CEO
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <div className="icon">
                    <AccessTimeRoundedIcon
                      sx={{ marginRight: "10px", color: "yellow" }}
                    />
                  </div>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "rgb(8, 138, 198)" }}
                  >
                    Joined Jan 2013
                  </Typography>
                </Box>
              </div>

              <Box display="flex" flexDirection="column" gap={1} sx={{ mt: 5 }}>
                <div
                  className="hover-div"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <AutoAwesomeMosaicIcon
                    sx={{
                      marginRight: "2rem",
                      marginLeft: "10px",
                      color: "#f57c00",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "rgb(8, 138, 198)" }}
                  >
                    Preview
                  </Typography>
                </div>
                <div
                  className="hover-div"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <PersonIcon
                    sx={{
                      marginRight: "2rem",
                      marginLeft: "10px",
                      color: "#f57c00",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "rgb(8, 138, 198)" }}
                  >
                    Contact Info
                  </Typography>
                </div>
                <div
                  className="hover-div"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <PhotoIcon
                    sx={{
                      marginRight: "2rem",
                      marginLeft: "10px",
                      color: "#f57c00",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "rgb(8, 138, 198)" }}
                  >
                    Media
                  </Typography>
                </div>
                <div
                  className="hover-div"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <SentimentSatisfiedAltIcon
                    sx={{
                      marginRight: "2rem",
                      marginLeft: "10px",
                      color: "#f57c00",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "rgb(8, 138, 198)" }}
                  >
                    KnoCard Social
                  </Typography>
                </div>
                <div
                  className="hover-div"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <InsertLinkIcon
                    sx={{
                      marginRight: "2rem",
                      marginLeft: "10px",
                      color: "#f57c00",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "rgb(8, 138, 198)" }}
                  >
                    My Links
                  </Typography>
                </div>
                <div
                  className="hover-div"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <HandshakeIcon
                    sx={{
                      marginRight: "2rem",
                      marginLeft: "10px",
                      color: "#f57c00",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "rgb(8, 138, 198)" }}
                  >
                    My Partners
                  </Typography>
                </div>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={7} >
            <Paper className="middle-section" >
              <img alt="Yacht" src={Yacht} height="300px" width="100%" />
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={4}>
                  <Paper className="middle-column" elevation={4} variant="outlined" sx={{border: "1px solid lightgrey", borderRadius: "10px" }} >
                    <div className="heading">
                      <Typography>Media</Typography>
                    </div>
                    <Card sx={{ maxWidth: "auto", my: 2 }}>
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
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: "auto", my: 2 }}>
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
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className="middle-column" elevation={4} variant="outlined" sx={{border: "1px solid lightgrey", borderRadius: "10px" }} >
                    <div className="heading">
                      <Typography>Posts</Typography>
                    </div>
                    <Card sx={{ maxWidth: "auto", my: 2 }}>
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
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: "auto", my: 2 }}>
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
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Paper className="right-row" elevation={4} variant="outlined" sx={{border: "1px solid lightgrey", borderRadius: "10px" }} >
                        <div className="heading">
                          <Typography>My Links</Typography>
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
                            }}
                            startIcon={
                              <ShoppingCartIcon sx={{ color: "gold" }} />
                            }
                          >
                            Shop and Earn
                          </Button>
                        </div>
                        <Typography variant="caption">
                          Shop and earn gives you the ability to
                        </Typography>
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
                              width: "75%",
                            }}
                            startIcon={
                              <CurrencyExchangeIcon sx={{ color: "green" }} />
                            }
                          >
                            Sign In
                          </Button>
                        </div>
                        <Typography variant="caption">
                          Sign and Checkout commissions in
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className="right-row" elevation={4} variant="outlined" sx={{border: "1px solid lightgrey", borderRadius: "10px" }} >
                        <div className="heading">
                          <Typography>Preferred Partners</Typography>
                        </div>
                        <Card sx={{ maxWidth: "auto", my: 2 }}>
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
                          <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                          </CardActions>
                        </Card>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="right-section" >
              <div className="image-container">
                <img src={Adv} alt="Background" className="background-image" />
                <div className="foreground-container">
                  <img
                    src={iPhone}
                    alt="Foreground"
                    className="foreground-image"
                  />
                  <img
                    src={BG}
                    alt="Overlay"
                    className="overlay-image"
                  />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
