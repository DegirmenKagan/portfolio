import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Home.css";
import background from "../assets/home_light.jpg";

const Home = () => {
  return (
    <Box
      component={"section"}
      className="home"
      id="Home"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        className="home-content"
        // display={"flex"}
        // flexDirection={"column"}
        // alignItems={"center"}
        marginInline={10}
        marginBlock={10}
      >
        <Typography variant="h3">Hello, It's me,</Typography>
        <Typography variant="h1">Kağan Değirmen</Typography>
        <Typography variant="h3">
          And I'm a <span>Frontend Developer</span>
        </Typography>
        <Typography paragraph sx={{ p: 3 }}>
          {`I enjoy working as Frontend. The idea of creating an aesthetic product
          to customers is amazing. I aim to satisfy people with my products. I
          spent more time with React Native, but now I’m interested in React.`}
        </Typography>
        <Grid container className="social-media">
          <Grid item>
            <IconButton
              aria-label="Linkedin.com"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/degirmenkagan/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon color={"primary"} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="youtube.com"
              onClick={() =>
                window.open("https://www.youtube.com/@Filmiyorum", "_blank")
              }
            >
              <YouTubeIcon color={"error"} fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          size="large"
          startIcon={<ContactPageIcon />}
          sx={{ marginTop: 5 }}
          disabled
        >
          Download CV
        </Button>
      </Box>

      <Box className="home-img" margin={10}>
        <img
          loading="lazy"
          src={require("../assets/webDev.png")}
          alt="webDevIcon"
          style={{ objectFit: "contain", borderRadius: 30 }}
        />
      </Box>
    </Box>
  );
};

export default Home;
