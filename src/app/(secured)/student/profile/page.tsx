"use client";

import { Typography, Box } from "@mui/material";
import { useUser } from "@/components/providers/UserProvider";

export default function StudentProfile() {
  const { user } = useUser();

  return (
    <Box>
      <Typography variant="h5">Student Profile</Typography>
      <Typography>User ID: {user.userId}</Typography>
      <Typography>Role: {user.role}</Typography>
    </Box>
  );
}
