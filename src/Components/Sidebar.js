import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, IconButton, Badge } from "@mui/material";
import { Dashboard, Chat, Send, ViewList, Contacts, Settings, Logout, Call, Menu, ChevronLeft } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(true); 

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 220 : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 220 : 60,
          transition: "width 0.3s ease",
          overflowX: "hidden",
          bgcolor: "#fff",
          borderRight: "1px solid #e0e0e0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
     
<Box sx={{ display: "flex", alignItems: "center", justifyContent: open ? "space-between" : "center", px: 2, py: 2 }}>
  {open && (
    <img src='./convobox.png' 
      alt="Company Logo"
      style={{ width: "40px", height: "40px", marginRight: "10px" }}
    />
  )}
  <IconButton onClick={toggleDrawer}>
    {open ? <ChevronLeft /> : <Menu />}
  </IconButton>
</Box>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: open ? "space-between" : "center", px: 2, py: 2 }}>
        {open && (
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            Convo<span style={{ color: "black" }}>Box</span>
          </Typography>
        )}
      </Box>

      {/* Sidebar Menu Items */}
      <List>
        {[
          { text: "Dashboard", icon: <Dashboard />, active: true },
          { text: "Conversation", icon: <Chat />, badge: 10 },
          { text: "Broadcasting", icon: <Send /> },
          { text: "Template", icon: <ViewList /> },
          { text: "Contacts", icon: <Contacts /> },
          { text: "Settings", icon: <Settings /> },
        ].map(({ text, icon, active, badge }) => (
          <ListItemButton key={text} sx={{ bgcolor: active ? "#7B47F5" : "transparent", color: active ? "#fff" : "#000" }}>
            <ListItemIcon sx={{ color: active ? "#fff" : "#7B47F5" }}>
              {badge ? <Badge badgeContent={badge} color="primary">{icon}</Badge> : icon}
            </ListItemIcon>
            {open && <ListItemText primary={text} />}
          </ListItemButton>
        ))}
      </List>

      {/* Footer Options */}
      <Box sx={{ textAlign: "center", py: 2 }}>
        <List>
          <ListItemButton>
            <ListItemIcon><Call sx={{ color: "#555" }} /></ListItemIcon>
            {open && <ListItemText primary="Contact Us" />}
          </ListItemButton>
          <ListItemButton sx={{ color: "red" }}>
            <ListItemIcon><Logout sx={{ color: "red" }} /></ListItemIcon>
            {open && <ListItemText primary="Log out" />}
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

