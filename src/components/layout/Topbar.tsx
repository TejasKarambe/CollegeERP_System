"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Topbar() {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        <Typography variant="h6" fontWeight={600}>
          ERP System
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
