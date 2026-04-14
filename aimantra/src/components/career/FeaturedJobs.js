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

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (page - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

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
                flexDirection: { xs: "column", md: "row" },
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