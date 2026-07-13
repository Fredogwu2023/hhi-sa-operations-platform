import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";
import menu from "../../data/menu";

const drawerWidth = 250;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        {menu.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              component={Link}
              to={item.page === "dashboard" ? "/" : `/${item.page}`}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}