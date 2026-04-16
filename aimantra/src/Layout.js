import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9fafc 0%, #e6ecf8 100%)", 
        backgroundImage: "url('/bg-image.jpg')", // optional
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </Box>
  );
}

export default Layout;