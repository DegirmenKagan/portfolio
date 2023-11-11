import { Box, Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GithubIcon from "@mui/icons-material/GitHub";
import "./About.css";

import { Constants } from "../../consts/Constants";

const About = () => {
  return (
    <Box
      component={"section"}
      className="about"
      id="About"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${Constants.aboutBgLight})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box className="about-img" margin={10}>
        <img
          loading="lazy"
          src={Constants.aboutIcon}
          alt="aboutIcon"
          style={{ objectFit: "contain", borderRadius: 30 }}
        />
      </Box>
      <Box className="about-content" marginInline={10} marginBlock={10}>
        <Typography variant="h3">About me,</Typography>
        <Typography paragraph sx={{ p: 3 }}>
          {`My programming journey, which started at Çiğli Science High School, (me and a friend of
mine made a project that is a complex version of laser meter with Arduino. ) was crowned with my
Computer Engineering degree at Manisa Celal Bayar University.
`}
        </Typography>

        <Typography paragraph sx={{ p: 3 }}>
          {`
Also we (Me and my friend from high school) have a youtube channel named "Filmiyorum"
that we comment on movies/series which has more than 4.5k subscribers. I am voiceovering and
editing our videos every week.)`}
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
      </Box>
    </Box>
  );
};

export default About;
