import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";

function WebDesigning() {
  const solutions = [
    {
      title: "App and Web UI Designing",
      text: "Crafting intuitive and visually stunning user interfaces (UI) and user experiences (UX) for both apps and websites. Our UI/UX design services blend creativity with functionality to create seamless digital experiences that captivate users and drive engagement. From wireframes to pixel-perfect designs, we specialize in creating interfaces that delight users and achieve your business goals across platforms."
    },
    {
      title: "App and Web Logo Designing",
      text: "Bringing your brand to life through captivating logo designs for both apps and websites. Our UI/UX design services extend beyond interfaces to craft iconic logos that reflect your brand identity and resonate with your audience. From concept to creation, we specialize in delivering memorable and impactful logo designs that leave a lasting impression across digital platforms."
    },
    {
      title: "Responsive Website",
      text: "Transforming user interfaces with custom-designed icons that enhance usability and elevate visual appeal. Our UI/UX design services specialize in crafting intuitive and visually engaging icons that guide users seamlessly through digital experiences. From navigation to functionality, we meticulously design icons that communicate effectively and enhance user interaction across platforms."
    },
    {
      title: "Customized Website",
      text: "Elevate your mobile app experience with captivating graphics and thoughtful design. Our UI/UX design services specialize in creating visually stunning and user-friendly mobile interfaces that engage users and enhance functionality. From sleek layouts to intuitive navigation, we tailor mobile graphics to captivate audiences and drive seamless interactions, ensuring your app stands out in today's competitive landscape."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 9, mb: 12 }}>
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#0a2540",
              mb: 2,
              textAlign: "center",
              pt: 3,
            }}
          >
            Overview
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#000000",
              textAlign: "center",
              pb: 2,
            }}
          >
            UI/UX Designing
          </Typography>
        </Box>
      </motion.div>

      {/* Intro Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
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
            We Design Visually Stunning & User-Friendly Customer Experience. The
            Design division at AImantra technology works as an independent wing
            with a dedicated team of User interface (UI) Designers, User
            Experience (UX) Designers, Graphic Designers and Animators.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            We follow industry standards and create UI/UX based on design
            guidelines. UI/UX design services we offer include: UI Design, UX
            Design, Interaction Design and Prototyping.
          </Typography>
        </Paper>
      </motion.div>

      {/* Solutions Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#0a2540",
              mb: 1,
              textAlign: "center",
            }}
          >
            Ideal Solutions for You
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#000000",
              textAlign: "center",
              mb: 3,
            }}
          >
            Our Services
          </Typography>
        </Box>
      </motion.div>

      {/* Solutions Grid */}
      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default WebDesigning;