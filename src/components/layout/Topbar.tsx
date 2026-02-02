"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { logout } from "@/services/auth.service";

export default function Topbar() {
  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={600}>
          ERP System
        </Typography>

        <Button color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
