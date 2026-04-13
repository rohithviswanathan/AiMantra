import {
  Box,
  Container,
  Typography,
  Grid
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Vision } from "./Vision";

function AboutUs() {
  const pillars = [
    "Strategic Assessment: Unveiling Possibilities",
    "Innovative Design: Crafting User-Centric Solutions",
    "Agile Development: Bringing Concepts to Life",
    "End-to-End Management: Ensuring Long-Term Success",
  ];

  return (
    <Box sx={{ bgcolor: "#f9fafc", py: 10 }}>
      <Container maxWidth="lg">
       {/* Headline */}
        <Box
        sx={{
            textAlign: "center",
            mt: 8,
            mb: 6,
            px: 2,
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
            color: "text.secondary",
            fontStyle: "italic",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.6,
            }}
        >
            Where Innovation Meets Excellence
        </Typography>
        </Box>

        {/* Pillars Section - styled as feature highlights */}
        <Grid
        container
        spacing={4}
        sx={{
            mx: "auto",
            mb: 10
        }}
        >
        {pillars.map((pillar, index) => (
            <Grid item xs={12} sm={6} key={index}>
            <Container maxWidth='lg'>
            <Box
                sx={{
                p: 3,
                borderRadius: 3,
                width: {xs: '100%', md: '510px'},
                bgcolor: "background.paper",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                },
                }}
            >
                <CheckCircleIcon sx={{ color: "#0a2540", fontSize: 32 }} />
                <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", fontWeight: 500, color: "text.primary" }}
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
        }}
        >
        About Our Work
        </Typography>

        {/* Three Key Highlights */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
        {[
            {
            title: "Who We Are",
            text: "We're a team of creative minds that work hard to achieve our client's goals. Since 2019, we've been delivering innovative technical solutions to businesses of all sizes, helping streamline operations and boost profitability.",
            },
            {
            title: "Revolutionise Your Digital Journey",
            text: "With AiMantra, innovation meets intelligence. We specialise in cutting-edge AI solutions that elevate your business to unprecedented heights — from smart automation to predictive analytics.",
            },
            {
            title: "Experience the Future of Technology",
            text: "Our expert team delivers precision, scalability, and transformative results. Unlock the potential of AI-driven excellence with solutions crafted for success.",
            },
        ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
            <Box
                sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
                textAlign: "center",
                background: "linear-gradient(135deg, #f9fafc, #eef2f7)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
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