"use client";

import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useUser } from "../providers/UserProvider";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar role={user.role} />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
