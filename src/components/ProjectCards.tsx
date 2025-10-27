import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { lazy, Suspense } from "react";

const LazyImage = lazy(() => import("./LazyImage"));
const LazyVideo = lazy(() => import("./LazyVideo"));

interface Project {
  title: string;
  description: string;
  image?: string;
  video?: string;
  link: string;
}

interface ProjectCardsProps {
  projects: Project[];
}

const ProjectCards = ({ projects }: ProjectCardsProps) => {
  return (
    <Grid container spacing={3} sx={{ maxWidth: "1200px", width: "100%" }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            component="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: "none",
              color: "inherit",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 40px rgba(233, 29, 99, 0.3)",
              },
            }}
          >
            <Box
              sx={{
                height: 200,
                overflow: "hidden",
                backgroundColor: "#e0e0e0",
                position: "relative",
              }}
            >
              <Suspense
                fallback={
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        border: "3px solid #f3f3f3",
                        borderTop: "3px solid #e91d63",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    />
                  </Box>
                }
              >
                {project.video ? (
                  <LazyVideo src={project.video} />
                ) : (
                  <LazyImage src={project.image || ""} alt={project.title} />
                )}
              </Suspense>
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Grid>
  );
};

export default ProjectCards;
