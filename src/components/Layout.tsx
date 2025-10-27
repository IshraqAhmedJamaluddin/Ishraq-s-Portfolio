import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Email,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "About", path: "/" },
    { label: "Résumé", path: "/resume" },
    { label: "Projects", path: "/projects" },
  ];

  const drawer = (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          Ishraq Ahmed Jamaluddin
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "primary.main",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
            onClick={() => navigate("/")}
          >
            Ishraq Ahmed Jamaluddin
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  color:
                    location.pathname === item.path
                      ? "white"
                      : "rgba(255,255,255,0.7)",
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 4, sm: 6 },
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          textAlign: "center",
          py: 3,
          mt: 8,
        }}
      >
        <Container>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}
          >
            <IconButton
              href="mailto:ishraqahmedjamaluddin@gmail.com"
              target="_blank"
              sx={{ color: "white", "&:hover": { color: "primary.light" } }}
            >
              <Email />
            </IconButton>
            <IconButton
              href="https://github.com/IshraqAhmedJamaluddin"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", "&:hover": { color: "primary.light" } }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/ishraqahmedjamaluddin/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", "&:hover": { color: "primary.light" } }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://www.kaggle.com/ishraqahmed"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", "&:hover": { color: "primary.light" } }}
            >
              <FontAwesomeIcon icon={faKaggle} style={{ fontSize: 24 }} />
            </IconButton>
          </Box>
          <Typography variant="body2">
            Copyright © {new Date().getFullYear()} Ishraq's Portfolio
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
