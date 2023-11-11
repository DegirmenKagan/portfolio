import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import { Constants } from "../consts/Constants";

const Header = () => {
  const pages = ["Home", "About", "Portfolio", "Contact"];

  return (
    <AppBar component={"nav"} className="navbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#Home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            aria-label="github.com"
            onClick={() => window.open(Constants.github, "_blank")}
          >
            <GithubIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
