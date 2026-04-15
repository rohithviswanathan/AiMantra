import { Box, Container, Typography, Grid, Link as MuiLink, Divider, IconButton } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const location = useLocation();

  const linkStyle = (to) => ({
    transition: "color 0.3s ease",
    fontWeight: location.pathname === to ? "bold" : "normal",
    color: location.pathname === to ? "#ffcc00" : "inherit",
    "&:hover": { color: "#ffcc00" },
  });

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0a2540 0%, #1e3c72 100%)",
          color: "#fff",
          py: 7,
          px: { xs: 1, md: 4 },
        }}
      >
        {/* Top Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#ffcc00" }}>
            Get in Touch
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 600, mx: "auto", color: "rgba(255,255,255,0.85)" }}>
            We have over 25 years of experience in IT solutions, delivering excellence across industries.
          </Typography>
        </Box>

        {/* Links Section */}
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" alignItems='flex-start' textAlign='center'>
            {/* Column 1 */}
            <Grid item sx={{display:{xs:'none',sm:'flex'}, width:'100px'}}></Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#ffcc00" }}>
                AiMantra
              </Typography>
              <Box sx={{display:{xs:'none',sm:'flex'}, width: '340px'}}></Box>
               <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/aboutus" },
                  { label: "Products", to: "/products" },
                  { label: "Service", to: "/services" },
                  { label: "Career", to: "/career" },
                ].map((item, i) => (
                  <MuiLink
                    key={i}
                    component={RouterLink}   // Use React Router Link
                    to={item.to}              // Use "to" instead of "href"
                    underline="hover"
                    sx={linkStyle(item.to)}
                  >
                    {item.label}
                  </MuiLink>
                ))}
              </Box>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#ffcc00" }}>
                Services
              </Typography>
               <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  { label: "Web Development", to: "/services/web-development" },
                  { label: "Mobile App Development", to: "/services/mobileapp-development" },
                  { label: "Digital Marketing", to: "/services/digital-marketing" },
                  { label: "UI/UX Designing", to: "/services/graphic-designing" },
                  { label: "Web Designing", to: "/services/web-designing" },
                ].map((service, i) => (
                  <MuiLink
                    key={i}
                    component={RouterLink}
                    to={service.to}
                    underline="hover"
                    sx={linkStyle(service.to)}
                  >
                    {service.label}
                  </MuiLink>
                ))}
              </Box>
            </Grid>

            {/* Column 3 */}
            <Grid item sx={{display:{xs:'none',sm:'flex'}, width:'90px'}}></Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#ffcc00" }}>
                Address
              </Typography>
              <Box sx={{ maxWidth: 250, mx: "auto" }}>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}>
                  3rd Floor Tower 3A, Sec 74A, DLF Corporate Greens, Dwarka Expressway, Gurugram, Haryana 122004, IN
                </Typography>
              </Box>

              {/* Social Media Icons */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <IconButton href="https://www.linkedin.com/company/aimantra" target="_blank" sx={{ color: "white", "&:hover": { color: "#ffcc00" } }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="https://instagram.com/aimantra.co" target="_blank" sx={{ color: "white", "&:hover": { color: "#ffcc00" } }}>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Bar */}
      <Box sx={{ bgcolor: "#0a2540", color: "white", py: 3 }}>
        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 2 }} />
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            © 2024 AiMantra. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Footer;