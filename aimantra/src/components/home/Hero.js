import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        //color: "white",
        py: 12,
        textAlign: "center",
        /* backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f")`, // replace with your own image 
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(45, 60, 75, 0.85) 0%, rgba(30,60,114,0.85) 100%)",
          zIndex: 1,
        },*/
      }}
      id="top"
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{pt:1, background: "#ffffff", borderRadius: "15px", boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"  }}>
        {/* Logo */}
        <motion.img
          src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/logo.svg"
          alt="AiMantraLogo"
          height={200}
          width={350}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            AiMantra Work Hard To <span style={{ color: "#ffcc00" }}>Exceed Your Goals</span>.
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Typography variant="h6" gutterBottom>
            At AiMantra, we offer top-tier services and cutting-edge design solutions, ensuring excellence and client satisfaction in every project.
          </Typography>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              mt: 3,
              px: 4,
              mb: 3,
              fontWeight: "bold",
              borderRadius: "30px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#ffcc00",
                color: "#0a2540",
                transform: "translateY(-3px)",
                boxShadow: "0px 6px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            <Link to="services" smooth={true} duration={800} style={{ textDecoration: "none", color: "inherit" }}>
              Get Started
            </Link>
          </Button>
        </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;