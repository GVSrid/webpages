import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//import { createTheme } from '@mui/material/styles';


/*const theme = createTheme({
  typography: {
    fontFamily: "DM sans", 
  },
});*/


const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: "white", 
        color: "black", 
        boxShadow: "none", 
        borderBottom: "1px solid #ddd",
        height: "60px" 
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>

        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {!isMobile && <Typography variant="h6" sx={{ fontWeight: "bold" }}>Dashboard</Typography>}
        </Box>

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography variant="body2">
              <strong>Current Plan:</strong> <span style={{ color: "purple" }}>Basic</span>
            </Typography>
            <Typography variant="body2">
              <strong>Wallet Balance:</strong> ₹1,841
            </Typography>
          </Box>
        )}

        <Avatar sx={{ bgcolor: "purple", cursor: "pointer", width: 36, height: 36 }}>CA</Avatar>

      </Toolbar>
    </AppBar>
  );
};

export default Header;


