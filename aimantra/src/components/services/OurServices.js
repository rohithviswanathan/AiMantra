import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { services, processSteps } from "../exports/Exports";

function OurServices() {

  return (
    <Container maxWidth="lg" sx={{ mt: 9, mb: 12 }}>
      {/* Headline */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: "#0a2540",
            textAlign: 'center',
            pt: 4
          }}
        >
          Transforming Visions into Reality
        </Typography>
      </Box>

      {/* Intro Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}        
      >
      <Paper
        elevation={3}
        sx={{
          p: 5,
          borderRadius: 3,
          textAlign: "left",
          lineHeight: 1.8,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          mb: 8,
          mt: 3
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          At AiMantra, our relentless pursuit of innovation converges seamlessly
          with our commitment to excellence.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          We navigate the ever-evolving landscape of technology, crafting
          solutions that not only meet but exceed expectations. Here,
          breakthroughs are not just anticipated; they are engineered.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Our dedicated team of experts harnesses the power of cutting-edge
          technologies to propel your business forward.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Experience the transformative journey where ingenuity meets precision,
          and let AiMantra be your catalyst for unprecedented success.
        </Typography>
      </Paper>
      </motion.div>

      <Divider sx={{ mb: 6 }} />

      {/* Services Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" sx={{ fontWeight: 600, color: "#0a2540", mb: 1, textAlign: 'center' }}>
          Ideal Solutions for You
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, color: "#000000", textAlign: 'center' }}>
          Our Services
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4} sx={{ mb: 10, mt: 4 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
                width: '360px',
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box>
                {service.icon}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mt: 2, mb: 1, color: "#0a2540" }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2, lineHeight: 1.6 }}
                >
                  {service.text}
                </Typography>
              </Box>

              <Box mt={2}>
                <Button
                  component={Link}
                  to={service.path}
                  variant="outlined"
                  sx={{
                    borderColor: "#0a2540",
                    color: "#0a2540",
                    "&:hover": { bgcolor: "#0a2540", color: "#fff" },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 6 }} />

      {/* Process Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" sx={{ fontWeight: 600, color: "#0a2540", mb: 1, textAlign: 'center' }}>
          How do we work?
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, color: "#000000", mb: 2, textAlign: 'center' }}>
          The Process of Excellence
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {processSteps.map((step, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card
              elevation={3}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                p: 2,
                borderRadius: 3,
                height: "100%",
                width: {xs:'100%', md: '540px'},
                transition: "transform 0.25s ease",
                "&:hover": { transform: "translateY(-6px)" },
                mt: 3,
                textAlign: "justify"
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#0a2540",
                  width: 56,
                  height: 56,
                  boxShadow: "0 6px 16px rgba(10,37,64,0.12)",
                }}
              >
                {step.icon}
              </Avatar>

              <CardContent sx={{ p: 0 }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#0a2540" }}>
                    {step.step}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, ml: 0.4 }}>
                  {step.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OurServices;