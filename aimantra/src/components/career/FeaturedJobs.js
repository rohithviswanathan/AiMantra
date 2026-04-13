import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function FeaturedJobs() {
  const jobs = [
    { title: "UI UX Designer", id: "71f59", department: "Information Technology", location: "Gurugram, Haryana", time: "Full-time", experience: "0-5" },
    { title: "Frontend Developer", id: "79bf9", department: "Information Technology", location: "Gurugram", time: "Full-time", experience: "0-5" },
    { title: "Mobile Developer", id: "a1211", department: "Information Technology", location: "Gurugram", time: "Full-time", experience: "0-5" },
    { title: "AI/ML", id: "b2caO", department: "Information Technology", location: "Gurugram", time: "Full-time", experience: "0-5" },
    { title: "React Native Developer", id: "Oc635", department: "Information Technology", location: "Gurugram", time: "Full-time", experience: "0-2" },
    { title: "Intern", id: "1a5c1", department: "Information Technology", location: "Gurugram, Haryana", time: "Intern", experience: "Fresher" },
    { title: "Backend Developer", id: "90870", department: "Information Technology", location: "Gurugram", time: "Full-time", experience: "0-1" },
    { title: "Full Stack Developer", id: "95744", department: "Information Technology", location: "Gurugram", time: "Full-time", experience: "0-5" },
    { title: "Video Editor", id: "05417", department: "Information Technology", location: "Gurgaon", time: "Full-time", experience: "0-5" },
    { title: "Data Analyst Cum Marketing Executive", id: "2170f", department: "Information Technology", location: "Gurgaon", time: "Full-time", experience: "0-5" },
    { title: "Graphic Designer", id: "72ff0", department: "Information Technology", location: "Gurgaon", time: "Full-time", experience: "0-5" },
    { title: "Quality Analyst", id: "81996", department: "Information Technology", location: "Gurugram", time: "Full-time", experience: "0-5 Years" },
  ];

  const jobsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (page - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 12 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 4, textAlign: "center", color: "text.primary" }}
      >
        Featured Jobs
      </Typography>

      {currentJobs.map((job, index) => (
        <Paper
          key={index}
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 2,
            mb: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // stack on mobile
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            width: "100%",
          }}
        >
          {/* Job Info */}
          <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {job.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <strong>JOB ID:</strong> {job.id}
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              {job.department}
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <strong>Location:</strong> {job.location}
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <strong>Time Period:</strong> {job.time}
            </Typography>
            <Typography variant="body2">
              <strong>Experience:</strong> {job.experience}
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button variant="contained" size="small" sx={{ fontWeight: 600 }}>
              Apply
            </Button>
            <Button variant="outlined" size="small" sx={{ fontWeight: 600 }}>
              Details
            </Button>
          </Box>
        </Paper>
      ))}

      {/* Pagination Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          gap: 2,
          flexWrap: "wrap", // makes it mobile-friendly
        }}
      >
        <IconButton
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={page === i + 1 ? "contained" : "outlined"}
            size="small"
            onClick={() => setPage(i + 1)}
            sx={{ minWidth: 40 }}
          >
            {i + 1}
          </Button>
        ))}

        <IconButton
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default FeaturedJobs;