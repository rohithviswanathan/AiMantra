import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container
} from "@mui/material";

function Clients() {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        background: "linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)", // colorful gradient
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#0a2540" }}
      >
        Meet Our Clients
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "text.secondary", mb: 5 }}
      >
        We have been working with clients around the world
      </Typography>

      <Container maxWidth="md">
        <Grid container spacing={10} justifyContent="center" sx={{ mt: 3 }}>
          {/* Client 1 */}
          <Grid item xs={6}>
            <Card
              elevation={6}
              sx={{
                borderTop: "6px solid #1976d2", // accent color
                borderRadius: 3,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
                },
                width: {'xs':'100%', 'md':'360px'},
                p: 4,
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <img
                  src="https://cipl-aimantra.s3.amazonaws.com/None/civilMantra.jpg"
                  alt="civilmantra"
                  height={80}
                  width={80}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ mt: 2, fontWeight: "bold", color: "#0a2540" }}
                >
                  Civilmantra Infracon Pvt Ltd
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  At AiMantra, we take pride in delivering exceptional services
                  that resonate with excellence, ensuring our success is
                  priority.
                </Typography>
              </CardContent>
            </Card>
            <Box sx={{ mt: 5 }}>
              <img
                src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/defUser.png"
                height={40}
                width={40}
                alt="user"
                style={{ borderRadius: "50%" }}
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "1rem", fontWeight: "bold", color: "#0a2540" }}
              >
                Susheel Bhardwaj
              </Typography>
              <Typography variant="body2" sx={{ mt: -1, color: "text.secondary" }}>
                Founder & Managing Director
              </Typography>
            </Box>
          </Grid>

          {/* Client 2 */}
          <Grid item xs={6}>
            <Card
              elevation={6}
              sx={{
                borderTop: "6px solid #ff9800", // accent color
                borderRadius: 3,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
                },
                width: {'xs':'100%', 'md':'360px'},
                p: 4,
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <img
                  src="https://cipl-aimantra.s3.amazonaws.com/None/G-Eng.png"
                  alt="G-eng"
                  height={60}
                  width={80}
                  style={{ borderRadius: "8px" }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ mt: 3, fontWeight: "bold", color: "#0a2540" }}
                >
                  G-eng Advisory Services Pvt Ltd
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  G-Eng highly recommends AiMantra for their innovative AI
                  solutions — a game-changer in transforming our business
                  operations!
                </Typography>
              </CardContent>
            </Card>
            <Box sx={{ mt: 5 }}>
              <img
                src="https://civilmantra.s3.ap-south-1.amazonaws.com/aimantra-website-images/AimantraAssets/defUser.png"
                height={40}
                width={40}
                alt="user"
                style={{ borderRadius: "50%" }}
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "1rem", fontWeight: "bold", color: "#0a2540" }}
              >
                Mahipal Singh
              </Typography>
              <Typography variant="body2" sx={{ mt: -1, color: "text.secondary" }}>
                Director
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Clients;