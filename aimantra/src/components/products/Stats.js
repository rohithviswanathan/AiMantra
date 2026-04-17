import CountUp from "react-countup";
import BarChartIcon from "@mui/icons-material/BarChart";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import { Typography, Paper, Box, Grid } from "@mui/material";

export function Stats() {
    return (
    <>
        {/* Stats Section */}
        <Box sx={{ mt: 10 }}>
        <Typography
            variant="h2"
            sx={{ fontWeight: 700, mb: 4, textAlign: "center", color: "text.primary" }}
        >
            Our Achievements
        </Typography>

        <Grid container spacing={4} justifyContent="center">
            {[
            {
                value: 85.45,
                suffix: "%",
                label: "Accuracy rate in fulfilling orders",
                icon: <BarChartIcon sx={{ fontSize: 50, color: "primary.main" }} />,
            },
            {
                value: 12.5,
                suffix: "M",
                label: "Business deals on the Inc. 5000",
                icon: <BusinessCenterIcon sx={{ fontSize: 50, color: "primary.main" }} />,
            },
            {
                value: 3200,
                suffix: "+",
                label: "E-commerce customers",
                icon: <ShoppingCartIcon sx={{ fontSize: 50, color: "primary.main" }} />,
            },
            {
                value: 45,
                prefix: "R",
                label: "World-class service provider",
                icon: <EmojiEventsIcon sx={{ fontSize: 50, color: "primary.main" }} />,
            },
            ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={4}
                sx={{
                    p: 5,
                    borderRadius: 4,
                    textAlign: "center",
                    height: "100%",
                    width: {xs:'100%', md: '260px'},
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: `0 6px 18px rgba(10,37,64,0.08)`,
                    "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 40px rgba(10,37,64,0.15)`,
                    },
                }}
                >
                <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}
                >
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix || ""}
                    prefix={stat.prefix || ""}
                    enableScrollSpy
                    scrollSpyOnce
                    />
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.6 }}
                >
                    {stat.label}
                </Typography>
                </Paper>
            </Grid>
            ))}
        </Grid>
        </Box>
    </>
    );
}