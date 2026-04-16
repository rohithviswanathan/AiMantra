import { Box, Typography, Grid, Container, Card, CardContent } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import TimelineIcon from '@mui/icons-material/Timeline';

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: 5, label: 'Service Geographics', icon: <PublicIcon fontSize="large" color="primary" /> },
    { number: 30, label: 'Fortune 500 Clients', icon: <EmojiEventsIcon fontSize="large" color="secondary" /> },
    { number: 300, label: 'Dedicated Members', icon: <GroupIcon fontSize="large" sx={{ color: '#4caf50' }} /> },
    { number: 2, label: 'Years of Journey', icon: <TimelineIcon fontSize="large" sx={{ color: '#ff9800' }} /> },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        textAlign: 'center',
        //background: 'linear-gradient(135deg, #f5f7fa 0%, #e4ebf5 100%)',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#0a2540' }}>
        Some Count That Matters
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary', mb: 5 }}>
        Our achievement in the journey depicted in numbers
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item sx={{display:{xs:"none", md:"flex"}}}></Grid>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  width: {xs:'340px', md: '100%'},
                  borderRadius: 3,
                  p: 3,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0px 12px 30px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {inView ? <CountUp end={stat.number} duration={2} /> : 0}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;