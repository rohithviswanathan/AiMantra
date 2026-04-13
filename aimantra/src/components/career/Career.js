import React from "react";
import { Container, Typography, Paper, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";

function Career() {
  return (
    <Container maxWidth="lg" sx={{ mt: 13, mb: 12 }}>
      {/* First Card */}
      <Paper
        elevation={2}
        sx={{
          p: 6,
          borderRadius: 2,
          textAlign: "center",
          lineHeight: 1.8,
          mb: 6, // spacing between cards
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
        >
          Empower Your Ambitions.
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: 500, mb: 3, color: "text.secondary" }}
        >
          Join the Innovation Revolution at AiMantra.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Fuel your career ambitions in a culture of innovation at AiMantra.
          Whether a seasoned pro or emerging talent, we welcome those driven by
          creativity and continuous growth. AiMantra offers more than just a job
          – it's an opportunity to contribute to cutting-edge projects and
          redefine the future of tech.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          Unleash your potential with us. Welcome to AiMantra, where careers
          transcend boundaries.
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/contact"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 600,
          }}
        >
          Get in Touch
        </Button>
      </Paper>

      {/* Second Card (New Paragraph) */}
      <Paper
        elevation={2}
        sx={{
          p: 6,
          borderRadius: 2,
          textAlign: "center",
          lineHeight: 1.8,
        }}
      >
        <Typography variant="h5" sx={{fontWeight: 700, mb:2, color: "text.primary"}}>We're looking for great people!</Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          While experience and talent hold
          significance, they're not the sole criteria for us. We seek individuals
          who not only possess these attributes but also embody our values, and
          wear their passions on their sleeves. We eagerly await to hear from you.
          Your unique blend of skills, values, and enthusiasm could be the perfect
          fit for our team.
        </Typography>
      </Paper>
      <FeaturedJobs />
    </Container>
  );
}

export default Career;