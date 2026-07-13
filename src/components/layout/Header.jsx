import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

import logo from "../../assets/lewisham-logo.png";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#4E4A4A",
        zIndex: 1300,
      }}
    >
      <Toolbar>

        <Box
          component="img"
          src={logo}
          alt="Lewisham"
          sx={{
            height: 36,
            mr: 2,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          HHI-SA Operations Platform
        </Typography>

        <Typography sx={{ mr: 2 }}>
          Frederick Ogwu
        </Typography>

        <Avatar>F</Avatar>

      </Toolbar>
    </AppBar>
  );
}