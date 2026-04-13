import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";

function ContentMarketing() {
  const solutions = [
    {
      title: "Custom Social Media Strategy Development",
      text: "We analyze your business objectives, target audience, and industry landscape to develop a bespoke social media strategy. This ensures that your brand reaches the right people on the right platforms, with content that resonates."
    },
    {
      title: "High-Quality Content Creation and Curation",
      text: "At AiMantra, we create compelling visuals, engaging videos, and informative blog posts tailored to your brand’s voice. Our team also curates relevant content to keep your audience engaged and informed, ensuring a consistent and attractive social media presence."
    },
    {
      title: "End-to-End Social Media Management",
      text: "We manage your social media profiles across platforms like Facebook, Instagram, LinkedIn, and Twitter. This includes content scheduling, community engagement, and real-time interaction with your audience to build strong relationships and boost brand loyalty."
    },
    {
      title: "Targeted Social Media Advertising",
      text: "Our experts design and execute targeted ad campaigns that maximize your ROI. Using advanced targeting techniques, we reach the right audience segments on platforms such as Facebook Ads, Instagram Ads, and LinkedIn Ads, ensuring your marketing budget is spent efficiently."
    },
    {
      title: "Influencer Marketing Campaigns",
      text: "AiMantra helps you leverage the power of influencers to amplify your brand’s reach. We identify and collaborate with influencers whose audiences align with your target demographic, managing the entire process from outreach to campaign execution."
    },
    {
      title: "In-Depth Social Media Analytics and Reporting",
      text: "We believe in data-driven decisions. Our team continuously monitors the performance of your social media campaigns, providing you with detailed reports that highlight key metrics like engagement rates, reach, conversion, and ROI. This allows us to refine strategies for optimal results."
    },
    {
      title: "Proactive Community Management",
      text: "Building a loyal community around your brand is crucial. AiMantra’s community management services ensure that your social media channels are vibrant and active, fostering meaningful interactions and promptly addressing customer queries or concerns."
    },
    {
      title: "Social Media Optimization",
      text: "Our SMO services are designed to enhance your social media profiles for better visibility and engagement. By implementing SEO best practices, we ensure your content is easily discoverable by your target audience."
    },
    {
      title: "Reputation Management and Brand Monitoring",
      text: "We safeguard your brand’s reputation by monitoring social media platforms for mentions and feedback. Our team actively manages your brand’s image, addressing negative comments constructively and amplifying positive sentiments."
    },
    {
      title: "Competitor Analysis for Strategic Advantage",
      text: "AiMantra conducts thorough competitor analysis to identify strengths, weaknesses, opportunities, and threats in your industry. This helps us position your brand effectively and leverage unique opportunities to stay ahead in the market."
    },
    {
      title: "Event Promotion through Social Media",
      text: "Whether you’re hosting a webinar, a product launch, or a corporate event, we promote your event across social media channels to maximize attendance and engagement. Our promotion strategies ensure your event reaches the right audience and generates buzz."
    },
    {
      title: "Engaging Social Media Contests and Giveaways",
      text: "To boost engagement and grow your follower base, we design and manage exciting contests and giveaways. AiMantra handles everything from concept development to execution and follow-up, ensuring a seamless and impactful campaign."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 12 }}>
      {/* Headline */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#0a2540", mb: 2, textAlign: 'center', pt: 3 }}
        >
          Overview
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, color: "text.secondary", textAlign: 'center', pb: 2 }}
        >
          Content Marketing
        </Typography>
      </Box>

      {/* Intro Content */}
      <Paper
        elevation={3}
        sx={{
          p: 5,
          borderRadius: 3,
          lineHeight: 1.8,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          mb: 8,
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          At AiMantra, we offer comprehensive Social Media Marketing (SMM) services that are designed to elevate your brand’s online presence, foster engagement, and drive tangible results. Our services are tailored to meet the unique needs of each client, ensuring a strategic approach that aligns with your business goals.
        </Typography>
      </Paper>

      {/* Solutions Header */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#0a2540", mb: 1, textAlign: 'center' }}
        >
          Ideal Solutions for You
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, color: "text.secondary", textAlign: 'center', mb: 3 }}
        >
          Our Services
        </Typography>
      </Box>

      {/* Solutions Grid */}
      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#0a2540" }}
              >
                {solution.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {solution.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ContentMarketing;