import {
  Box,
  Container,
  Typography,
  Grid
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Vision } from "./Vision";
import { aboutOurWork, pillars } from "../exports/Exports";

function AboutUs() {
  return (
    <Box
      sx={{
        //bgcolor: "#f9fafc",
        py: 10
      }}
    >
      <Container maxWidth="lg">
        {/* Headline */}
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            mb: 6,
            px: 2,
            opacity: 0,
            animation: "fadeIn 2s ease forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#0a2540",
              letterSpacing: 1.5,
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            Welcome to AiMantra
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#000000",
              fontStyle: "italic",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Where Innovation Meets Excellence
          </Typography>
        </Box>

        {/* Pillars Section */}
        <Grid container spacing={4} sx={{ mx: "auto", mb: 10 }}>
          {pillars.map((pillar, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Container maxWidth="lg">
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    width: { xs: "100%", md: "510px" },
                    bgcolor: "background.paper",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-6px) scale(1.02)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#0a2540", fontSize: 32 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "text.primary",
                    }}
                  >
                    {pillar}
                  </Typography>
                </Box>
              </Container>
            </Grid>
          ))}
        </Grid>

        {/* About Our Work */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
            color: "#0a2540",
            letterSpacing: 1,
            opacity: 0,
            animation: "fadeIn 2s ease 0.5s forwards",
          }}
        >
          About Our Work
        </Typography>

        {/* Highlights */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {aboutOurWork.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #f9fafc, #eef2f7)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  opacity: 0,
                  animation: `fadeIn 2s ease ${i * 0.3 + 0.5}s forwards`,
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: "#0a2540",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.6 }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Vision />
      </Container>
    </Box>
  );
}

export default AboutUs;