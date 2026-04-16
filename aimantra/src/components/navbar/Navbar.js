import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Decide background color
  const homePage = location.pathname === "/";
  const backgroundColor = !homePage
    ? "rgba(10, 37, 64, 0.9)" 
    : scrolled
    ? "rgba(10, 37, 64, 0.9)" // solid after scroll
    : "transparent"; // transparent at top on Home

  const navLinks = [
    { label: "Home", type: "route", to: "/" },
    { label: "About Us", type: "route", to: "aboutus" },
    { label: "Products", type: "route", to: "products" },
    { label: "Services", type: "route", to: "services" },
    { label: "Career", type: "route", to: "career" },
    { label: "Contact Us", type: "route", to: "contact" },
  ];

  return (
     <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        bgcolor: backgroundColor,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <Link to='/'>
            <img src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/logo.svg" alt="aimantralogo" height={65} width={120} />
          </Link>
        </Typography>

      {isMobile ? (
        <>
          <IconButton color="inherit" edge="end" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <Box sx={{ width: 200, display: "flex", flexDirection: "column", p: 2 }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === `/${link.to}`;
                return (
                  <Button
                    key={link.label}
                    color="inherit"
                    onClick={() => setOpen(false)}
                    sx={{
                      fontWeight: isActive ? "bold" : "normal",
                      color: isActive ? theme.palette.primary.main : "inherit",
                    }}
                  >
                    <RouterLink
                      to={link.to}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {link.label}
                    </RouterLink>
                  </Button>
                );
              })}
            </Box>
          </Drawer>
        </>
      ) : (
        navLinks.map((link) => {
          const isActive = location.pathname === `/${link.to}`;
          return (
            <Button
              key={link.label}
              color="inherit"
              sx={{
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? theme.palette.background.default : "inherit",
                border: isActive ? "1px solid" : "none",
                borderColor: isActive ? theme.palette.background.default : "transparent"
              }}
            >
              <RouterLink
                to={link.to}
                style={{ textDecoration: "none", color: "inherit", "outline": "none"}}
              >
                {link.label}
              </RouterLink>
            </Button>
          );
        })
      )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;