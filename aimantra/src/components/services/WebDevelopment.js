import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";

function WebDevelopment() {
  const solutions = [
    {
      title: "E-Commerce",
      text: "Elevate your online presence with our expert web development services tailored specifically for ecommerce. From sleek designs to seamless user experiences, we specialize in crafting dynamic and scalable websites that drive sales and captivate customers.",
    },
    {
      title: "WordPress Website",
      text: "Unlock the power of WordPress with our professional web development services. We specialize in creating stunning, responsive websites that are easy to manage and update. Whether you're a business, blogger, or creative professional, we'll tailor a WordPress solution to suit your needs, helping you stand out online with style and functionality.",
    },
    {
      title: "Responsive Website",
      text: "Crafting responsive websites that adapt seamlessly to any device. Our expert web development ensures your online presence looks stunning and functions flawlessly, whether viewed on a desktop, tablet, or mobile phone. Reach your audience wherever they are with a responsive website designed for optimal user experience.",
    },
    {
      title: "Customized Website",
      text: "Tailored web development solutions that bring your unique vision to life. From concept to creation, we specialize in building customized websites that reflect your brand identity, meet your specific requirements, and engage your audience effectively. Elevate your online presence with a bespoke website that stands out from the crowd.",
    },
    {
      title: "Website Maintenance",
      text: "Keeping your website running smoothly, so you can focus on what matters most. Our website maintenance services ensure your site remains up-to-date, secure, and optimized for peak performance. From regular updates to security monitoring and troubleshooting, we've got you covered, so you can keep your online presence thriving without the hassle.",
    },
    {
      title: "Web Hosting",
      text: "Reliable web hosting solutions to keep your online presence secure and accessible. Our web hosting services offer lightning-fast performance, robust security measures, and 24/7 support, ensuring your website is always up and running smoothly. Trust us to provide the foundation for your online success, so you can focus on growing your business.",
    },
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
            Website Development
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
            Nowadays, the website is the first point of contact for real
            customers. Web design & development services can have a big
            financial effect on your business. Almost 99% of a user's first
            impression comes from your website.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            AiMantra Technology offers web design and development services to
            make a powerful impact on your online business. We build websites
            that are not only affordable, but also easy to navigate, responsive,
            bring in high conversion rates, and significantly grow your brand.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            From personal websites to e-stores, and corporate websites to custom
            web apps, AiMantra is the all-in-one platform to create beautiful &
            interactive websites that engage visitors.
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

export default WebDevelopment;