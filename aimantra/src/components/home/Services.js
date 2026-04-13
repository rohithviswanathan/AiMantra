import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";

function Services() {
  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(135deg, #0a2540 0%, #1e3c72 100%)",
        py: 8,
      }}
    >
      <Container id="services" maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
         
        >
          Ideal Solution For You
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          We have over 2 decades of knowledge in IT sector
        </Typography>

        {/* Service Cards */}
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Web Development: Unleashing Digital Excellence",
              desc: "Elevate your online presence with AiMantra's Web Development services. Utilize cutting-edge WEB3 technology for dynamic websites. Seamlessly integrate HRMS for efficient employee management. Our CIPL-certified solutions enhance intranets for collaboration.",
              color: "#1976d2",
            },
            {
              title: "Corporate Branding: Shaping Your Identity for Success",
              desc: "Your brand is more than a logo, it's your identity. AiMantra's Corporate Branding services transcend aesthetics, focusing on your brand essence. From logo design to brand messaging, we craft a narrative that resonates.",
              color: "#9c27b0",
            },
            {
              title: "Digital Marketing: Igniting Visibility, Driving Growth",
              desc: "Ignite your online presence with AiMantra's Digital Marketing services. Our expert team utilizes strategic approaches to enhance visibility, engage your target audience, and drive growth.",
              color: "#e91e63",
            },
            {
              title: "Mobile App Development: Navigating Innovation for iOS and Android",
              desc: "Transform your concepts into interactive realities with AiMantra's Mobile App Development services. We excel in iOS and Android app development, utilizing cutting-edge technologies to craft intuitive and feature-rich applications.",
              color: "#ff9800",
            },
          ].map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={6}
                sx={{
                  height: "100%",
                  background: "#fff",
                  color: "#333",
                  borderTop: `6px solid ${service.color}`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 12px 30px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: service.color }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;