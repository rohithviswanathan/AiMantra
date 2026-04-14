import React from "react";
import { Container, Typography, Paper, Box, Grid, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentIcon from "@mui/icons-material/Payment";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ correct import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { services } from "../services/Exports";
import "./products.css";

function Products() {

  return (
    <Container maxWidth="lg" sx={{ mt: 13, mb: 12 }}>
      {/* Intro Section */}
      <Paper
        elevation={2}
        sx={{
          p: 6,
          borderRadius: 2,
          textAlign: "center",
          lineHeight: 1.8,
          mb: 6,
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
      <Box sx={{ mr: 8, mb: 8 }}>
        <img
          src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/mpro16.png"
          alt="AiMantra HRMS"
          height={"100%"}
          width={"100%"}
        />
      </Box>

      {/* Features Section */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "text.primary", textAlign: "center" }}>
        Our Features
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 3, color: "text.secondary", textAlign: "center" }}>
        Experience the Future of HR Management with AiMantra HRMS
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, color: "text.secondary", textAlign: "center" }}>
        Join us and embark on a journey towards enhanced efficiency, productivity, and employee satisfaction.
      </Typography>

      <Grid container spacing={4}>
        {/* Feature Card */}
        {[
          {
            icon: <PersonIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Employee Self-Service Portal",
            desc: "Empower your workforce with access to essential HR functions, allowing them to update personal information, view pay stubs, request time off, and more."
          },
          {
            icon: <WorkIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Recruitment and Applicant Tracking",
            desc: "Streamline your hiring process with automated job postings, resume parsing, and applicant tracking. Ensure you find the best talent quickly and efficiently."
          },
          {
            icon: <AssessmentIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Performance Management",
            desc: "Set goals, track progress, and conduct performance evaluations effortlessly, fostering a culture of continuous improvement within your organization."
          },
          {
            icon: <AccessTimeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Time and Attendance Tracking",
            desc: "Simplify timekeeping and attendance management with automated tracking, customizable timesheets, and real-time reporting capabilities."
          },
          {
            icon: <PaymentIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Payroll Processing",
            desc: "Say goodbye to manual payroll calculations and compliance headaches. AiMantra HRMS automates payroll processing, tax deductions, and statutory compliance, ensuring accuracy."
          },
          {
            icon: <BarChartIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Analytics and Reporting",
            desc: "Gain valuable insights into your workforce with comprehensive analytics and reporting tools, enabling data-driven decision-making for strategic HR planning."
          },
        ].map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                textAlign: "center",
                height: "100%",
                width: "360px"
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

      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "text.primary", textAlign: "center", mt: 10 }}>
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
            900: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
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
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 260,
                    boxShadow: `0 6px 18px rgba(10,37,64,0.06)`,
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: `0 18px 36px rgba(10,37,64,0.12)`,
                    },
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Box sx={{ display: "inline-block", mb: 1 }}>{service.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mt: 1, mb: 1, color: "#0a2540" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
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
    </Container>
  );
}

export default Products;