import {
  Box,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GithubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";

import "./Portfolio.css";

import { Constants } from "../../consts/Constants";
import React from "react";
import { portfolioData } from "./PortfolioData";

const portfolio = () => {
  return (
    <Box
      component={"section"}
      className="portfolio"
      id="Portfolio"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${Constants.portfolioBgLight})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid justifyContent={"center"}>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "revert",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Some Example Projects of Mine
          </Typography>
        </Grid>
        <Grid item>
          <ImageList sx={{ width: 500, height: 450 }}>
            {portfolioData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                  subtitle={item.desc}
                  //   <Typography paragraph sx={{ p: 3 }}>
                  //   {item.desc}
                  // </Typography>
                />
                {/* <Box position={"absolute"} style={{ backgroundColor: "#7b7b7b" }}>
              <Typography paragraph color={"white"} sx={{ p: 3 }}>
                {item.desc}
              </Typography>
            </Box> */}
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item>
          <Box className="portfolio-content" marginInline={10} marginBlock={10}>
            <Grid container className="social-media" justifyContent={"center"}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default portfolio;
