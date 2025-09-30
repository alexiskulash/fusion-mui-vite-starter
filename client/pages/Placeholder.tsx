import * as React from "react";
import { Box, Typography, Paper, Stack, Button } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";

export default function Placeholder() {
  const { page } = useParams();
  return (
    <Paper sx={{ p: 4 }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h5" fontWeight={700}>{page?.charAt(0).toUpperCase() + page!.slice(1)} (Coming soon)</Typography>
        <Typography color="text.secondary">
          This section is a placeholder. Continue prompting to generate its content.
        </Typography>
        <Box>
          <Button variant="contained" component={RouterLink} to="/">Back to dashboard</Button>
        </Box>
      </Stack>
    </Paper>
  );
}
