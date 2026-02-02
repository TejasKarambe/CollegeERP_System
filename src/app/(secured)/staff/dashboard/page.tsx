"use client";

import { Typography } from "@mui/material";
import { useRequireRole } from "@/lib/auth";

export default function StaffDashboard() {
  useRequireRole("Staff");

  return <Typography variant="h4">Staff Dashboard</Typography>;
}
