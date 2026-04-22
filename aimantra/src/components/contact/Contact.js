import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../exports/Exports";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate successful submission
      setOpenSnackbar(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <br />
        <Container maxWidth='lg' sx={{mt:8}}>
        <Box
          sx={{
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#f9fafc",
            color: "#0a2540",
            pt: 2,
            pb: 2,
            px: 2,
            borderRadius: "15px", 
            boxShadow: "0px 4px 15px rgba(0,0,0,0.1)" 
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Connect with Confidence
            </Typography>

            <Typography variant="h4" sx={{ mb: 3 }}>
              Reach Out, Let's Create Together.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1.1rem", color: "text.secondary" }}
            >
              Dive into a world of possibilities by reaching out to us. The
              Contact Us page is your direct line to ignite conversations and
              explore the endless potential of collaboration.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, fontSize: "1.1rem", color: "text.secondary" }}
            >
              Your journey with AiMantra begins here. Whether you have
              questions, ideas, or collaboration in mind, our Contact Us page is
              the gateway to seamless communication. Reach out with confidence,
              and let's embark on a collaborative journey to turn your visions
              into reality.
            </Typography>
          </Container>
        </Box>
        </Container>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Box sx={{ //bgcolor: "#ffffff",
          py: 8 }}>
          <Container maxWidth="md">
            <Paper elevation={6} sx={{ p: 5, borderRadius: 3 }}>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#0a2540" }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ mb: 4, color: "text.secondary" }}
              >
                We'd love to hear from you. Fill out the form below and our team
                will get back to you shortly.
              </Typography>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                multiline
                rows={5}
                fullWidth
                sx={{ mb: 3 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: "8px",
                  transition: "background 0.3s ease",
                  "&:hover": { backgroundColor: "#0a2540" },
                }}
              >
                Send Message
              </Button>
            </Paper>
            {/* Snackbar */}
            <Snackbar
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{
                vertical: isMobile ? "top" : "bottom",
                horizontal: "center",
              }}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity="success"
                sx={{ width: "100%" }}
              >
                Message submitted successfully!
              </Alert>
            </Snackbar>
          </Container>
        </Box>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Box sx={{ //bgcolor: "#ffffff",
        py: 4 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#0a2540", mb: 4 }}
            >
              Our Location
            </Typography>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                height: "500px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2177220872454!2d77.04146907529235!3d28.412686575785457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa72a6435def3cd7%3A0xbcee9a04f03e4cf9!2sAiMantra!5e0!3m2!1sen!2sin!4v1776328840496!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AiMantra Location"
              ></iframe>
            </Box>
          </Container>
        </Box>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Box sx={{ //bgcolor: "#f9fafc",
           py: 8 }}>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#0a2540", mb: 4 }}
            >
              Frequently Asked Questions
            </Typography>

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                    boxShadow: 2,
                    "&:before": { display: "none" },
                    "&:hover": { boxShadow: 4, bgcolor: "#f4f6fa" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#0a2540" }} />}
                  >
                    <Typography sx={{ color: "#0a2540" }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "text.secondary" }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Container>
        </Box>
      </motion.div>
    </>
  );
}

export default Contact;