import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";

function GraphicDesigning() {
  const solutions = [
    {
      title: "Logo Design",
      text: "Capture the essence of your brand with our professional logo design services. We specialize in creating memorable and visually appealing logos that resonate with your target audience. Partner with us to make a lasting impression with a captivating logo that speaks volumes about your business."
    },
    {
      title: "Corporate Identity",
      text: "Define your brand's visual identity with our corporate identity design services. From logos and colour schemes to typography and brand guidelines, we craft impactful designs that reflect your brand's personality and values. Our expert designers ensure consistency across all brand assets, helping you establish a strong and memorable brand presence in the market. Partner with us to create a professional and cohesive corporate identity that resonates with your audience and sets you apart from competitors."
    },
    {
      title: "Social Media Post",
      text: "Elevate your social media presence with eye-catching and engaging social media posts. Our graphic design services specialize in creating visually stunning and on-brand content that captivates your audience and drives engagement. Partner with us to enhance your social media strategy and leave a lasting impression on your followers."
    },
    {
      title: "Flyer Designing",
      text: "Make a lasting impression with our expert flyer design services. From eye-catching visuals to concise copywriting, we craft flyers that grab the audience's interest and drive action. Partner with us to create standout flyers that promote your business, event, or special offer with style and impact."
    },
    {
      title: "T-shirt Designing",
      text: "Express yourself with custom-designed T-shirts that make a statement. Our graphic design services specialize in creating unique and stylish T-shirt designs that reflect your personality, brand, or event. From bold graphics to intricate illustrations, we craft designs that turn heads and spark conversations. Partner with us to bring your vision to life on wearable art that stands out in any crowd."
    },
    {
      title: "Brochure Designing",
      text: "Elevate your brand's marketing collateral with our expert brochure design services. We specialize in creating visually stunning and informative brochures that effectively communicate your message and capture the attention of your audience. Partner with us to showcase your products, services, or events with professional and impactful brochure designs."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 12 }}>
      {/* Headline */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#0a2540", mb: 2, textAlign: 'center', pt: 3 }}
        >
          Overview
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, color: "text.secondary", textAlign: 'center', pb: 2 }}
        >
          Graphic Designing
        </Typography>
      </Box>

      {/* Intro Content */}
      <Paper
        elevation={3}
        sx={{
          p: 5,
          borderRadius: 3,
          lineHeight: 1.8,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          mb: 8,
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Graphic design plays a very crucial role in this competitive market as a tool for communication. An impressive graphic design is a perfect combination of texts and pictures to explain your business ideas through different mediums.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Our team of passionate, skilled and experienced creative experts takes pride in giving you results through a wide spectrum of Graphic Design expertise. With the creative lead and strategically driven solution, we would try your brand to connect with consumers on an astonish level.
        </Typography>
      </Paper>

      {/* Solutions Header */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#0a2540", mb: 1, textAlign: 'center' }}
        >
          Ideal Solutions for You
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, color: "text.secondary", textAlign: 'center', mb: 3 }}
        >
          Our Services
        </Typography>
      </Box>

      {/* Solutions Grid */}
      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#0a2540" }}
              >
                {solution.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {solution.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default GraphicDesigning;