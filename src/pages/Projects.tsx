import { useState } from "react";
import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import ProjectCards from "../components/ProjectCards";

interface Project {
  title: string;
  description: string;
  image?: string;
  video?: string;
  link: string;
}

const mlProjects: Project[] = [
  {
    title: "AI Girlfriend",
    description: "An AI-powered conversational companion application.",
    image: "/images/ai-girlfriend.png",
    link: "https://ishraqahmedjamaluddin.github.io/ai-girlfriend/",
  },
  {
    title: "Chatbot",
    description:
      "An interactive chatbot application with advanced conversational capabilities.",
    image: "/images/chatbot.png",
    link: "https://ishraqahmedjamaluddin.github.io/chatbot/",
  },
  {
    title: "Weather Dashboard",
    description:
      "A dashboard using plotly-dash showing the weather for current day and 7 days following.",
    video: "/vids/dash.mp4",
    link: "https://github.com/IshraqAhmedJamaluddin/Weather-Dashboard-Plotly",
  },
  {
    title: "Head Pose Estimation",
    description:
      "Using 2D landmarks, AFLW2000 dataset & mediapipe, then applying different machine learning algorithms.",
    video: "/vids/ML1-sped-up.mp4",
    link: "https://github.com/IshraqAhmedJamaluddin/ML1",
  },
  {
    title: "Air Passenger Time Series Analysis and Forecasting",
    description:
      "A time series data project that applies most of the concepts of Time Series Analysis and Forecasting.",
    image: "/images/Time-Series.png",
    link: "https://github.com/Heba-Atef99/Air-Passengers-Time-Series",
  },
  {
    title: "Travelling Salesman",
    description:
      "Travelling salesman problem using some Random Search Algorithms (NN, GA & ACO).",
    video: "/vids/TSP-sped-up.mp4",
    link: "https://github.com/IshraqAhmedJamaluddin/Travelling-salesman-problem-using-some-Random-Search-Algorithms",
  },
];

const webProjects: Project[] = [
  {
    title: "TourisTopia",
    description:
      "I implemented a full-stack website from scratch from a design mockup made by Mazen Shebeta.",
    image: "/images/touristopia.png",
    link: "https://omgwhatisthat.000webhostapp.com/",
  },
  {
    title: "Food",
    description: "Just an interface of a food ordering website.",
    image: "/images/food.png",
    link: "https://ishraqahmedjamaluddin.github.io/food/",
  },
  {
    title: "web folk",
    description: "A college project using bootstrap.",
    image: "/images/webfolk.jpg",
    link: "https://ishraqahmedjamaluddin.github.io/web-folk/",
  },
  {
    title: "Grocery list",
    description: "A college team project using bootstrap.",
    image: "/images/grocery_list.jpg",
    link: "https://github.com/OmniaRafat232111121/Grocey_list",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A college project tic_tac_toe game.",
    image: "/images/TicTacToe.jpg",
    link: "https://github.com/IshraqAhmedJamaluddin/tic_tac_toe",
  },
  {
    title: "To do App",
    description: "A todo app using python flask.",
    image: "/images/python_todo.jpg",
    link: "https://github.com/IshraqAhmedJamaluddin/python-todoapp",
  },
  {
    title: "To do App",
    description: "A todo app using php laravel.",
    image: "/images/phptodo.jpg",
    link: "https://github.com/IshraqAhmedJamaluddin/php-todo",
  },
  {
    title: "Posty",
    description: "A social media app using php laravel.",
    image: "/images/posty.jpg",
    link: "https://github.com/IshraqAhmedJamaluddin/posty",
  },
  {
    title: "Hire Me",
    description:
      "A Solution Challenge Project that helps fresh grads and undergrads be well prepared for the labour market.",
    image: "/images/HireMe.jpg",
    link: "https://github.com/IshraqAhmedJamaluddin/Hire-Me",
  },
  {
    title: "Twitter Clone",
    description: "This is a twitter clone using react and redux.",
    image: "/images/twitter.jpg",
    link: "https://github.com/IshraqAhmedJamaluddin/reactnd-twitter-clone",
  },
  {
    title: "Drive Portfolio",
    description:
      "My personal google drive Portfolio that includes various projects using various programming languages and tools.",
    image: "/images/driveLogo.png",
    link: "https://drive.google.com/open?id=1TzeIsleE8hsxjcUuSrUXCZzfNFnBt4R-",
  },
];

const Projects = () => {
  const [tab, setTab] = useState(0);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: "primary.main",
          mb: 4,
        }}
      >
        My Projects
      </Typography>
      <Box sx={{ width: "100%", mb: 4 }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
            sx={{
              "& .MuiTab-root": {
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                minHeight: 60,
              },
              "& .Mui-selected": {
                color: "primary.main",
              },
            }}
            TabIndicatorProps={{
              sx: {
                backgroundColor: "primary.main",
                height: 4,
              },
            }}
          >
            <Tab label="AI & Machine Learning" />
            <Tab label="Web Development" />
          </Tabs>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {tab === 0 && <ProjectCards projects={mlProjects} />}
        {tab === 1 && <ProjectCards projects={webProjects} />}
      </Box>
    </Container>
  );
};

export default Projects;
