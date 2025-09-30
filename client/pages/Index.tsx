import * as React from "react";
import { Box, Paper, Stack, Typography, LinearProgress, CircularProgress, Button } from "@mui/material";

export default function Index() {
  const messages = [
    "Initializing project",
    "Installing dependencies",
    "Scaffolding pages",
    "Configuring theme",
    "Optimizing assets",
    "Finalizing setup",
  ];

  const [progress, setProgress] = React.useState(0);
  const [msgIndex, setMsgIndex] = React.useState(0);

  React.useEffect(() => {
    const p = setInterval(() => {
      setProgress((v) => (v >= 100 ? 0 : v + 2));
    }, 60);
    const m = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 1200);
    return () => {
      clearInterval(p);
      clearInterval(m);
    };
  }, []);

  return (
    <Box sx={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper sx={{ p: 4, maxWidth: 560, width: "100%" }}>
        <Stack spacing={3} alignItems="center">
          <CircularProgress color="primary" size={56} thickness={4} />
          <Stack spacing={0.5} alignItems="center" sx={{ width: "100%" }}>
            <Typography variant="h5" fontWeight={700}>Preparing your app…</Typography>
            <Typography color="text.secondary" align="center">{messages[msgIndex]}</Typography>
          </Stack>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress} />
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.5 }}>
              {Math.min(99, progress)}%
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary" align="center">
            You can keep this tab open while we generate your project.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button size="small" href="/dashboard" variant="outlined">View sample dashboard</Button>
            <Button size="small" href="/reports" variant="text">Reports</Button>
            <Button size="small" href="/settings" variant="text">Settings</Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
