import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";

function MobileAppDevelopment() {
  const solutions = [
    {
      title: "Android",
      text: "Empower your business with cutting-edge Android app development. Our expert team specializes in crafting custom Android applications tailored to your unique needs and goals. From sleek user interfaces to robust functionality, we deliver seamless mobile experiences that captivate users and drive business growth. Partner with us to harness the power of Android and reach your audience wherever they are."
    },
    {
      title: "Cross-Platform",
      text: "Maximise your reach with cross-platform mobile app development. Our expert team specializes in creating versatile apps that seamlessly run on multiple operating systems, including iOS and Android. With a single codebase, we deliver cost-effective solutions that reach a broader audience and drive business growth."
    },
    {
      title: "iOS",
      text: "Unlock the full potential of iOS with our premier mobile app development services. From concept to launch, we specialize in creating seamless and intuitive iOS applications that elevate user experiences and drive engagement. With a focus on elegant design and flawless functionality, we ensure your iOS app stands out on Apple devices, delivering exceptional value to your users and your business."
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
            Mobile App Development
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
            If you have an idea, we have an app development team which can
            transform your idea into a secure & feature-packed mobile
            application. From the initial planning until the final deployment in
            the app store, our mobile apps development company in India covers
            everything.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            We build both native and cross-platform mobile apps with advanced
            feature integration based on Augmented Reality, Virtual Reality and
            many more. When you choose us, you get trust of a brand with 100%
            money back guarantee, India's best mobile app development team.
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

export default MobileAppDevelopment;