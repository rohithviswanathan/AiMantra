import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";

function DigitalMarketing() {
  const solutions = [
    {
      title: "Content Marketing",
      text: "Fuel your online presence with strategic content marketing solutions. Our digital marketing services specialize in creating compelling and relevant content that resonates with your target audience. From informative articles to engaging videos, we craft content that drives traffic, builds brand awareness, and generates leads. Partner with us to elevate your content strategy and achieve your marketing goals effectively."
    },
    {
      title: "Social Media Marketing",
      text: "Elevate your brand's online presence with strategic social media marketing solutions. Our digital marketing services specialize in creating engaging content, fostering community engagement, and driving brand awareness across various social media platforms. From content creation to ad campaigns, we tailor our strategies to maximise reach, engagement, and conversions. Partner with us to harness the power of social media and grow your business online."
    },
    {
      title: "SEO Marketing",
      text: "Boost your online visibility and drive organic traffic to your website with our expert SEO marketing services. We specialize in optimising your website's content, structure, and performance to rank higher in search engine results pages. Through keyword research, on-page optimization, and link building strategies, we ensure your website is easily discoverable by your target audience. Partner with us to enhance your online presence and achieve long-term success in the digital landscape."
    },
    {
      title: "PPC Marketing",
      text: "Accelerate your online growth with targeted PPC (Pay-Per-Click) marketing solutions. Our digital marketing services specialize in crafting strategic ad campaigns that reach your ideal audience at the right time and place. Partner with us to amplify your online presence and achieve rapid results with PPC advertising."
    },
    {
      title: "Web Marketing",
      text: "Elevate your online presence with our web marketing solutions. From strategic planning to execution, we specialize in leveraging digital channels to promote your brand, drive traffic, and generate leads. Our tailored approach encompasses a range of tactics, including SEO, PPC, social media, content marketing, and more, to maximise your online visibility. Partner with us to optimise your digital marketing efforts and achieve your business objectives in the online arena."
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
            Digital Marketing
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
            Owing to the ever-increasing demand and popularity of the web-based
            and mobile games, the mobile gaming industry is experiencing
            exponential growth. Today, people seek engaging and interesting
            games with which they can indulge. We, at AImantra Technology, offer
            our clients an exhaustive set of iOS and Android game development
            services that help you transform your vision of a visually splendid
            game into a reality.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            From personal websites to e-stores and corporate websites to custom
            web apps, AImantra Technology is the all-in-one platform to create a
            beautiful interactive websites that engage visitors.
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

export default DigitalMarketing;