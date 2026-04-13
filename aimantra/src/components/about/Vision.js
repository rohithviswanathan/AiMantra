import {
  Box,
  Typography,
  Grid
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function Vision() {
  const visionMissionValues = [
    {
      title: "Our Vision",
      text: `AiMantra's aim is to be known as a global leader in providing innovative, trustworthy and high-quality IT solutions. We aim to provide businesses of all sizes and sectors with cutting-edge technology that optimises operation, enhances the customer experience, and encourages growth.`,
    },
    {
      title: "Our Mission",
      text: `AiMantra's mission is to redefine industries through the power of artificial intelligence. Committed to innovation and excellence, we strive to provide tailored solutions that empower businesses and enhance user experiences. Guided by a vision of a smarter, more connected world, our mission is to shape the future of AI technology.`,
    },
    {
      title: "Our Values",
      text: `At AiMantra, our core values drive our commitment to excellence. We prioritize innovation, integrity, and client satisfaction, delivering AI solutions with precision and reliability.`,
    },
  ];

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
                "&:hover": {
                    bgcolor: "action.hover",
                    borderRadius: 2,
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
        }}
        >
        What We Do
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8, maxWidth: "lg", mx: "auto" }}>
        {[
            {
            title: "Innovative IT Solutions",
            text: "AiMantra is among the top IT companies in India, with the expertise to deliver complex business solutions that drive measurable impact.",
            },
            {
            title: "Complete Digital Transformation",
            text: "We provide end-to-end digital solutions tailored to your brand, helping you streamline operations, enhance efficiency, and accelerate growth.",
            },
            {
            title: "AI-Powered Excellence",
            text: "Leveraging cutting-edge artificial intelligence, AiMantra crafts intelligent services — from smart automation to predictive analytics — shaping a smarter, connected future.",
            },
        ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
            <Box
                sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
                textAlign: "center",
                background: "linear-gradient(135deg, #f9fafc, #eef2f7)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-8px)",
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
        }}
        >
        Why Choose Us?
        </Typography>

        <Typography
        variant="h6"
        align="center"
        sx={{ mb: 6, color: "text.secondary", maxWidth: 800, mx: "auto" }}
        >
        Why AiMantra is Ranked Among the Leading Web & App Development Companies
        </Typography>

        <Grid container spacing={6} sx={{ mb: 8 }}>
        {[
            {
            title: "Attention to Details",
            text: "We redefine precision with our unparalleled attention to detail. From coding to deployment, every aspect of our AI solutions is crafted meticulously.",
            icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
            },
            {
            title: "Highly Qualified Team",
            text: "Our success is driven by a highly qualified team of experts. With deep AI knowledge, our professionals bring innovation and experience to every project.",
            icon: <GroupsIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
            },
            {
            title: "The Culture",
            text: "Our culture thrives on innovation, collaboration, and a passion for AI excellence. We foster a dynamic environment committed to learning and client success.",
            icon: <LightbulbIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
            },
            {
            title: "Trusted by 100+ Clients",
            text: "AiMantra’s proven track record showcases unparalleled expertise, reliability, and transformative solutions — trusted by over 100 satisfied clients.",
            icon: <HandshakeIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
            },
            {
            title: "Long-term Relations",
            text: "We believe in cultivating lasting partnerships built on trust, adaptability, and shared growth in the evolving landscape of AI.",
            icon: <FavoriteIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
            },
            {
            title: "Excellent Quality & Delivery Time",
            text: "Excellence is our standard. We ensure every solution meets the highest quality benchmarks and is delivered on time, every time.",
            icon: <AccessTimeIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
            },
        ].map((item, i) => (
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
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                {item.text}
                </Typography>
            </Box>
            </Grid>
        ))}
        </Grid>
     </>
    );
}