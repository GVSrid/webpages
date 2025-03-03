import React from "react";
import { Grid, Card, Typography, Box, Button,Select, MenuItem } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeProvider, createTheme } from "@mui/material/styles"; 

const theme = createTheme(); 

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const pieData = [
    { name: "Marketing", value: 186, color: "#A855F7" },
    { name: "Utility", value: 210, color: "#22C55E" },
  ];

  const barData = [
    { date: "Sept 10", value: 50 },
    { date: "Sept 11", value: 80 },
    { date: "Sept 12", value: 40 },
    { date: "Sept 13", value: 70 },
    { date: "Sept 14", value: 90 },
    { date: "Sept 15", value: 60 },
    { date: "Sept 16", value: 85 },
  ];

  return (
    <Box sx={{ p: isMobile ? 2 : 4 }}>
      <Grid container spacing={3}>

        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>ConvoBox</Typography>
                  <Typography variant="body2" color="primary">+91 73385 19445</Typography>
                  <Typography variant="caption">Status: Registered</Typography>
                </Box>
              </Box>
              <EditIcon color="action" />
            </Box>
            <Button variant="text" sx={{ mt: 1, color: "primary.main" }}>View Profile</Button>
          </Card>
        </Grid>

        {/* WhatsApp API & Wallet */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">WhatsApp Business API</Typography>
            <Typography variant="body1" sx={{ color: "green", fontWeight: "bold" }}>LIVE</Typography>
            <Typography variant="body2">Quality Rating</Typography>
            <Button variant="contained" sx={{ bgcolor: "green", color: "white", mt: 1 }}>High</Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">Wallet Balance</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>₹ 1,841.00</Typography>
            <Button variant="contained" startIcon={<AccountBalanceWalletIcon />} sx={{ mt: 1 }}>+ Add Balance</Button>
          </Card>
        </Grid>

        {/* Messaging Sent */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">Messaging Sent</Typography>
            <Select defaultValue="this-week">
                  <MenuItem value="this-week">This Week</MenuItem>
                  <MenuItem value="last-week">Last Week</MenuItem>
                  <MenuItem value="this-month">This Month</MenuItem>
            </Select>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <ResponsiveContainer width="50%" height={80}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={30} outerRadius={40} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <Box sx={{ ml: 2 }}>
                {pieData.map((item, index) => (
                  <Typography key={index} variant="body2">
                    <span style={{ color: item.color, fontWeight: "bold" }}>●</span> {item.name}: {item.value}
                  </Typography>
                ))}
                <Typography variant="body2" sx={{ mt: 1 }}>Total: 396 Messages</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Basic Plan & Messaging Limits */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">Basic Plan</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Valid till 30/08/2025</Typography>
            <Button variant="contained" sx={{ mt: 1 }}>Upgrade / Renew</Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">Messaging Limits</Typography>
            <Typography variant="h6">1000</Typography>
            <Typography variant="caption">Business-initiated conversations in a rolling 24-hour period</Typography>
            <Button variant="text" 
            sx={{ mt: 1 }} 
            component="a" 
            href="https://developers.facebook.com/docs/whatsapp/messaging-limits#increasing-messaging-limits"
            target="_blank" 
            rel="noopener noreferrer"> Read more
            </Button>
          </Card>
        </Grid>

        {/* Broadcast Overview */}
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">Broadcast Overview</Typography>
            <Select defaultValue="last-7-days">
              <MenuItem value="last-7-days">Last 7 Days</MenuItem>
              <MenuItem value="last-30-days">Last 30 Days</MenuItem>
              <MenuItem value="last-90-days">Last 90 Days</MenuItem>
            </Select>
            <Grid container spacing={2} mt={1}>
              {["Recipients", "Sent", "Delivered", "Read", "Replied", "Clicks"].map((label, index) => (
                <Grid item xs={6} md={2} key={index}>
                  <Card sx={{ textAlign: "center", p: 1 }}>
                    <Typography variant="h6">128</Typography>
                    <Typography variant="body2">{label}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* Conversation Summary */}
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">Conversation Summary</Typography>
            <Select defaultValue="last-7-days">
              <MenuItem value="last-7-days">Last 7 Days</MenuItem>
              <MenuItem value="last-30-days">Last 30 Days</MenuItem>
              <MenuItem value="last-90-days">Last 90 Days</MenuItem>
            </Select>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#A855F7" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Dashboard;