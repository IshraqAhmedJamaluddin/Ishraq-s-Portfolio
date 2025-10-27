import { Container, Box, Typography, Link } from "@mui/material";
import { useRef } from "react";

const Resume = () => {
  const iframeRef = useRef<HTMLObjectElement>(null);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: "primary.main",
          mb: 4,
        }}
      >
        Résumé
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "400px", md: "700px" },
        }}
      >
        <Box
          component="iframe"
          ref={iframeRef}
          src="https://drive.google.com/file/d/1XRTQTl_V0C7L4m9uP6VaLSjW3fPhSbC7/preview"
          sx={{
            width: "100%",
            height: { xs: "600px", md: "900px" },
            border: "none",
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Box sx={{ textAlign: "center", p: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Unable to display PDF file.
            </Typography>
            <Link
              href="https://drive.google.com/file/d/1XRTQTl_V0C7L4m9uP6VaLSjW3fPhSbC7/view?usp=sharing"
              target="_blank"
              sx={{
                display: "inline-block",
                color: "primary.main",
                textDecoration: "none",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: 1,
                px: 3,
                py: 1.5,
                fontWeight: 600,
                transition: "all 0.3s",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              Download PDF
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Resume;
