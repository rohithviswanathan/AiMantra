import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { blue, orange, green, purple, grey } from "@mui/material/colors";

function Expertise() {
  const expertiseItems = [
    { label: "UI/UX Design", icon: <img src='https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/Vector.png' alt="UI/UX" style={{height: 40}} />, color: blue[500] },
    { label: "Angular", icon: <img src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/angular%201.png" alt="Angular" style={{ height: 40 }} />, color: blue[900] },
    { label: "React", icon: <img src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/react.png" alt="React" style={{ height: 40 }} />, color: orange[500] },
    { label: "Android", icon: <img src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/android%201.png" alt="Android" style={{height: 40}} />, color: blue[300] },
    { label: "IOS", icon: <img src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/Frame.svg" alt="IOS" style={{height: 40}} />, color: grey[600] },
    { label: "Node JS", icon: <img src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/node-js%201.png" alt="NodeJS" style={{ height: 40 }} />, color: green[500] },
    { label: "Wordpress", icon: <img src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/wordpress%201.png" alt="Wordpress" style={{ height: 40 }} />, color: purple[500] },
    { label: "Flutter", icon: <img src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/flutter%201.png" alt="Flutter" style={{ height: 40 }} />, color: green[700] },
  ];

  return (
    <Container maxWidth='lg'>
    <Box sx={{ py: 8, px: 3, background: "linear-gradient(135deg, #f5f7fa 0%, #e4ebf5 100%)", borderRadius: "15px", boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"  }}>
      {/* Heading */}
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: "bold", color: "#0a2540" }}>
        Expertise
      </Typography>
      <Typography variant="h6" gutterBottom align="center" sx={{ color: "text.secondary", mb: 1 }}>
        Technology is an Art, We are Artists
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: "text.secondary", mb: 5 }}>
        Every Business is Unique. We Select the Perfect Tools for Your Needs
      </Typography>

      {/* Grid of expertise items */}
      <Grid container spacing={2} justifyContent="center">
        {expertiseItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                height: "100%",
                width: {xs:'360px', md: '100%'},
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: 'center',
                justifyContent: "center",
                borderTop: `6px solid ${item.color}`,
                borderRadius: 3,
                p: 3,
                ml: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                  transform: "translateY(-5px)",
                },
              }}
              elevation={2}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0a2540" }}>
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
}

export default Expertise;