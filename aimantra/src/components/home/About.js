import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function About() {
  const listItems = [
    "Tailored websites, apps, and software meet your needs",
    "Access top talent, leading solutions",
    "Fulfill HRMS and CIPL requirements",
    "Over 350 successful projects delivered",
  ];

  return (
    <Box id="about">
      <Container maxWidth="lg" sx={{ pt:1, mt: 1  }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{ mb: 1, fontWeight: "bold", color: "#0a2540", pb: 1 }}
          >
            About Our Work
          </Typography>
        </motion.div>
      </Container>

      <Container maxWidth="lg" sx={{ py: 4, mt: 3, background: "#ffffff", borderRadius: "15px", boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"  }}>
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            align="justify"
            sx={{ mb: 4, color: "#333", lineHeight: 1.7 }}
          >
            AiMantra solution is a result-oriented IT company in India and USA.
            With a team of top talented people who are driven to give you the
            custom software development solution and make your life easier. We
            are dedicated to develop result driven websites, applications and
            software that strictly meet business requirements and cater to a
            wide spectrum of projects.
          </Typography>
        </motion.div>

        {/* Animated List with Icons */}
        <List>
          {listItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#0a2540" }} />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    variant: "body1",
                    sx: { color: "#0a2540" },
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 4,
                borderRadius: "30px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#ffcc00",
                  color: "#0a2540",
                  transform: "translateY(-3px)",
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Link
                to="aboutus"
                smooth={true}
                duration={800}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                More Details
              </Link>
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;