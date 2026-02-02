import { Typography, Box } from "@mui/material";

export default function ForbiddenPage() {
  return (
    <Box sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" color="error">
        403 – Access Denied
      </Typography>
      <Typography>
        You do not have permission to access this page.
      </Typography>
    </Box>
  );
}
