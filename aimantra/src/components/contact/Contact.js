import { Box, Container, Typography, TextField, Button, Paper, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "How can I get in touch with AiMantra?",
    answer:
      "Connecting with us is a breeze! Simply visit our Contact Us page, fill in the required details, and drop us a message. Alternatively, you can reach out via phone or email, details of which are conveniently listed on our page."
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Connecting with us is a breeze! Simply visit our Contact Us page, fill in the required details, and drop us a message. Alternatively, you can reach out via phone or email, details of which are conveniently listed on our page."
  },
  {
    question: "What is the usual response time?",
    answer: "We understand the importance of timely communication. Rest assured, our team is committed to responding to your queries within 24 hours. Your messages are valuable to us, and we strive to provide prompt and meaningful responses."
  },
  {
    question: "Can I connect with AiMantra through social media?",
    answer: "Absolutely! Stay updated and engage with us on our social media platforms. Follow us on [LinkedIn](https://www.linkedin.com/company/aimantra) and [Instagram](https://www.linkedin.com/company/aimantra) for the latest updates, industry insights, and a glimpse into the vibrant AiMantra community"
  },
  {
    question: "Is AiMantra hiring? How can I apply for a position?",
    answer: "Yes, we're always on the lookout for talented individuals to join our team. Visit our Career page for the latest job openings and details on how to apply. We look forward to welcoming new additions to the AiMantra family."
  },
  {
    question: "Can I visit AiMantra's office in person?",
    answer: "Certainly! Our office is located at Dwarka Expressway, DLF Corporate Greens, 3rd Floor Tower 3, Sec 74A, Gurugram, Haryana 122004, IN. If you like to schedule a visit, drop us a line in advance, and we'll be happy to welcome you."
  },
  {
    question: "How can I get in touch with AiMantra?",
    answer: "Connecting with us is a breeze! Simply visit our Contact Us page, fill in the required details, and drop us a message. Alternatively, you can reach out via phone or email, details of which are conveniently listed on our page."
  }
];

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#f9fafc", // lighter neutral background (different from Navbar)
          color: "#0a2540",
          pt: 15,
          pb: 6,
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Connect with Confidence
          </Typography>

          <Typography variant="h4" sx={{ mb: 3 }}>
            Reach Out, Let's Create Together.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem", color: "text.secondary" }}>
            Dive into a world of possibilities by reaching out to us. The Contact Us page is your direct line to ignite conversations and explore the endless potential of collaboration.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem", color: "text.secondary" }}>
            Your journey with AiMantra begins here. Whether you have questions, ideas, or collaboration in mind, our Contact Us page is the gateway to seamless communication. Reach out with confidence, and let's embark on a collaborative journey to turn your visions into reality.
          </Typography>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
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
            We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
          </Typography>

          {/* All fields stacked vertically */}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
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
      </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: "#f9fafc", py: 8 }}>
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
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: 2,
                boxShadow: 2,
                "&:before": { display: "none" },
                "&:hover": { boxShadow: 4, bgcolor: "#f0f4ff" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#0a2540" }} />}>
                <Typography sx={{ color: "#0a2540" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary" }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default Contact;