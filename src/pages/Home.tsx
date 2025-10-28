import { Container, Box, Typography, Grid } from "@mui/material";
import { lazy, Suspense } from "react";
import "./Home.css";

const LazyImage = lazy(() => import("../components/LazyImage"));

// Helper function to get the correct path with base URL
const getPath = (path: string) => import.meta.BASE_URL + path.substring(1);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "250px", md: "400px" },
          backgroundImage: `url(${getPath("/images/bg2.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: { xs: 3, md: 4 },
            borderRadius: 2,
            textAlign: "center",
            maxWidth: "90%",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "1.8rem", md: "3rem" },
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            AI Automation Engineer with expertise in predictive modeling,
            programming, and data analysis. Passionate about machine learning
            and education.
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ pb: 4, pt: 4 }}>
        <Grid container spacing={4}>
          {/* Sidebar with Image */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "350px",
                position: "sticky",
                top: 100,
                height: "fit-content",
              }}
            >
              <Suspense
                fallback={<Box sx={{ height: 400, bgcolor: "#ddd" }} />}
              >
                <LazyImage
                  src={getPath("/images/headshot.jpg")}
                  alt="Ishraq Ahmed Jamaluddin"
                  className="profile-image"
                />
              </Suspense>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                mb: 3,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              My name is Ishraq, which means Sunshine in Arabic
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
              During my college years, I learned many CS skills from lectures as
              I used to study out of passion and love for the field. I gained
              online skills as well such as web development and android
              development, machine learning, and I made my first game from Java
              that used GUI.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
              From the student activity I was enrolled in, I learned a lot about
              project management, BMC, and presentation skills as I became the
              head of the presentation committee afterward. Then I was elected
              as the president of Enactus Modern Academy due to my hard work and
              ability to make members feel at home, work hard, and see the
              outcome of their efforts.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
              During my Junior year, I became the Lead at GDSC Modern Academy in
              Maadi. I'm passionate about full-stack (specially backend) web
              development and I've made many projects with my own hands. During
              my year as a GDSC Lead I was an instructor for students at my
              campus in a full-stack web development course. I worked with
              multiple backend stacks and I was also a backend intern which gave
              me much experience in a working environment.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
              I joined ITI 9-month program in Artificial Intelligence and
              Machine Learning (AI & ML) track and it was a unique experience.
              I've met a lot of awesome people and learnt a lot about the field
              including but not limited to: databases, supervised & unsupervised
              machine learning, deep learning, reinforcement learning, time
              series analysis and forecasting, computer vision, natural language
              processing, and recommender systems.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              I had the luckiest opportunity to work as an online coding
              instructor twice, for CodeCombat and Udacity. I really enjoyed
              teaching the younger generation from different countries from all
              around the globe and promoting an enthusiasm for Computer Science.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
