import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "red", color: "white" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <Typography variant="h6" color="white">
              Daniel
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="page 2" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="page 3" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
