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
import { jobs } from "../exports/Exports";
import { motion, AnimatePresence } from "framer-motion";

function FeaturedJobs() {
  const jobsPerPage = 5;
  const [page, setPage] = useState(1);
  const [expandedJobId, setExpandedJobId] = useState(null);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (page - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handleToggleDetails = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 12 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            color: "text.primary",
          }}
        >
          Featured Jobs
        </Typography>
      </motion.div>

      <AnimatePresence mode="wait">
        {currentJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 2,
                mb: 4,
                display: "flex",
                flexDirection: "column", // stack rows vertically
                width: "100%",
              }}
            >
              {/* Top Row: Info left, Buttons right */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  mb: 2,
                }}
              >
                {/* Job Info */}
                <Box sx={{ flex: 1 }}>
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

                {/* Buttons aligned right */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button variant="contained" size="small" sx={{ fontWeight: 600 }}>
                    Apply
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ fontWeight: 600 }}
                    onClick={() => handleToggleDetails(job.id)}
                  >
                    {expandedJobId === job.id ? "Hide Details" : "Details"}
                  </Button>
                </Box>
              </Box>

              {/* Expanded Details BELOW, centered */}
              <AnimatePresence>
                {expandedJobId === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: "100%" }}
                  >
                    <Box
                      sx={{
                        mt: 2,
                        p: 2,
                        borderRadius: 2,
                        bgcolor: "rgba(0,0,0,0.03)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // center horizontally
                        textAlign: "center",  // center text
                      }}
                    >
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Job Title:</strong> Full-time
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Location:</strong> Gurugram, Haryana
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Knowledge:</strong> Swift, Objective-C, SwiftUI
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        <strong>Salary:</strong> Negotiable
                      </Typography>
                      <Button variant="contained" size="small" sx={{ fontWeight: 600 }}>
                        Apply Now
                      </Button>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Paper>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Pagination Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <IconButton
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <ArrowBackIosIcon />
          </IconButton>

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
      </motion.div>
    </Container>
  );
}

export default FeaturedJobs;