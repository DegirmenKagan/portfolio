import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GithubIcon from "@mui/icons-material/GitHub";
import "./Home.css";

import { Constants } from "../../consts/Constants";

const Home = () => {
  return (
    <Box
      component={"section"}
      className="home"
      id="Home"
      sx={{
        height: "100vh",
        backgroundImage: `url(${Constants.homeBgLight})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        scrollSnapAlign: "center",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <Box className="home-content" marginInline={10} marginBlock={10}>
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
              aria-label="github.com"
              onClick={() => window.open(Constants.github, "_blank")}
            >
              <GithubIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="Linkedin.com"
              onClick={() => window.open(Constants.linkedin, "_blank")}
            >
              <LinkedInIcon color={"primary"} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="youtube.com"
              onClick={() => window.open(Constants.youtube, "_blank")}
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
          href={Constants.cv}
          download={"KaganDegirmenResume.pdf"}
        >
          Download Resume
        </Button>
      </Box>

      <Box className="home-img" margin={10}>
        <img
          loading="lazy"
          src={Constants.homeIcon}
          alt="homeIcon"
          style={{ objectFit: "contain", borderRadius: 30 }}
        />
      </Box>
    </Box>
  );
};

export default Home;
