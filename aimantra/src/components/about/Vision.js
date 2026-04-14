import {
  Box,
  Typography,
  Grid
} from "@mui/material";
import { visionMissionValues, whatWeDo, whyChooseUs } from "../exports/Exports";

export function Vision() {
  return (
    <>
      {/* Vision, Mission, Values */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: "#0a2540",
          letterSpacing: 1,
          opacity: 0,
          animation: "fadeIn 2s ease forwards",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        Vision, Mission & Values
      </Typography>

      <Grid container spacing={6} sx={{ position: "relative", mb: 8 }}>
        {visionMissionValues.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                maxWidth: 900,
                mx: "auto",
                p: 3,
                borderLeft: "4px solid #0a2540",
                position: "relative",
                opacity: 0,
                animation: `fadeIn 1.5s ease ${index * 0.3 + 0.5}s forwards`,
                "&:hover": {
                  bgcolor: "rgba(240,245,250,0.6)",
                  borderRadius: 2,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                  transform: "scale(1.02)",
                  transition: "all 0.4s ease",
                },
              }}
            >
              {/* Circle marker */}
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "#0a2540",
                  position: "absolute",
                  left: -10,
                  top: 24,
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)", opacity: 1 },
                    "50%": { transform: "scale(1.3)", opacity: 0.6 },
                    "100%": { transform: "scale(1)", opacity: 1 },
                  },
                }}
              />

              {/* Content */}
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: "#0a2540",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.7 }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* What We Do */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          mt: 10,
          color: "#0a2540",
          letterSpacing: 1,
          opacity: 0,
          animation: "fadeIn 2s ease 0.5s forwards",
        }}
      >
        What We Do
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8, maxWidth: "lg", mx: "auto" }}>
        {whatWeDo.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
                textAlign: "center",
                background: "linear-gradient(135deg, #f9fafc, #eef2f7)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                opacity: 0,
                animation: `fadeIn 1.5s ease ${i * 0.3 + 0.5}s forwards`,
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.03)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#0a2540",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.7 }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Why Choose Us */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 2,
          mt: 10,
          color: "#0a2540",
          letterSpacing: 1,
          opacity: 0,
          animation: "fadeIn 2s ease 0.8s forwards",
        }}
      >
        Why Choose Us?
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{
          mb: 6,
          color: "text.secondary",
          maxWidth: 800,
          mx: "auto",
          opacity: 0,
          animation: "fadeIn 2s ease 1s forwards",
        }}
      >
        Why AiMantra is Ranked Among the Leading Web & App Development Companies
      </Typography>

      <Grid container spacing={6} sx={{ mb: 8 }}>
        {whyChooseUs.map((item, i) => (
          <Grid
            item
            xs={12}
            md={6}
            key={i}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              p: 3,
              borderRadius: 2,
              bgcolor: "background.paper",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              opacity: 0,
              animation: `fadeIn 1.5s ease ${i * 0.3 + 1}s forwards`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
              },
            }}
          >
            {item.icon}
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 1, color: "#0a2540" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}