import { Box, Toolbar } from "@mui/material";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

import AppRoutes from "./routes/AppRoutes";

const drawerWidth = 250;

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          p: 3,
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        <AppRoutes />

        <Footer />
      </Box>
    </Box>
  );
}