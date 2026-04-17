import { Container, Typography, Paper, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ correct import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { features, services } from "../exports/Exports";
import "./products.css";
import { Stats } from "./Stats";

function Products() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 9,
        mb: 12,
        borderRadius: 3,
        p: 2,
      }}
    >
      {/* Intro Section */}
      <Paper
        elevation={2}
        sx={{
          p: 6,
          borderRadius: 2,
          textAlign: "center",
          lineHeight: 1.8,
          mb: 6,
          opacity: 0,
          animation: "fadeIn 2s ease forwards",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}>
          Introducing Ai Mantra HRMS
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500, mb: 3, color: "text.secondary" }}>
          Your Gateway to Streamlined Human Resource Management
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, fontStyle: "italic", color: "text.secondary" }}>
          "Elevating HR to new heights with our mantra for success."
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Welcome to AiMantra HRMS, where innovation meets efficiency in human resource management. 
          Our comprehensive HRMS solution is meticulously crafted to cater to the diverse needs of modern businesses, 
          empowering organizations to optimize their HR processes effortlessly.
        </Typography>
      </Paper>

      {/* Image */}
      <Box
        sx={{
          mr: { xs: 1, md: 8 },
          mb: 8,
          opacity: 0,
          animation: "fadeIn 2s ease 0.5s forwards",
        }}
      >
        <img
          src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/mpro16.png"
          alt="AiMantra HRMS"
          height={"100%"}
          width={"100%"}
          //style={{ borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
        />
      </Box>

      {/* Features Section */}
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, color: "text.primary", textAlign: "center" }}>
        Our Features
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 3, color: "#000000", textAlign: "center" }}>
        Experience the Future of HR Management with AiMantra HRMS
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, color: "#000000", textAlign: "center" }}>
        Join us and embark on a journey towards enhanced efficiency, productivity, and employee satisfaction.
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                textAlign: "center",
                height: "100%",
                width: "360px",
                opacity: 0,
                animation: `fadeIn 1.5s ease ${index * 0.3 + 0.5}s forwards`,
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.03)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Services Section */}
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, color: "text.primary", textAlign: "center", mt: 10 }}>
        Our Services
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: "text.primary", textAlign: "center", mt: 2 }}>
        Our Featured Service that We Provide
      </Typography>

      <Box sx={{ position: "relative" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} 
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            900: { slidesPerView: 3, spaceBetween: 24 },
            600: { slidesPerView: 2, spaceBetween: 20 },
          }}
          style={{ paddingBottom: "50px" }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: `0 6px 18px rgba(10,37,64,0.06)`,
                  opacity: 0,
                  animation: `fadeIn 1.5s ease ${index * 0.3 + 0.5}s forwards`,
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-6px) scale(1.02)",
                    boxShadow: `0 18px 36px rgba(10,37,64,0.12)`,
                  },
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Box sx={{ display: "inline-block", mb: 1 }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mt: 1, mb: 1, color: "#0a2540" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {service.text}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center", mt: 3 }}>
                  <Button
                    component={Link}
                    to={service.path}
                    variant="outlined"
                    sx={{
                      borderColor: "#0a2540",
                      color: "#0a2540",
                      px: 3,
                      py: 0.8,
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#0a2540", color: "#fff" },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Stats />
    </Container>
  );
}

export default Products;