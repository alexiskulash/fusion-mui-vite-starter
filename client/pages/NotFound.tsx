import { useLocation, Link as RouterLink } from "react-router-dom";
import * as React from "react";
import { Box, Paper, Stack, Typography, Button } from "@mui/material";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ p: 4 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h3" fontWeight={700}>
            404
          </Typography>
          <Typography color="text.secondary">Page not found</Typography>
          <Button variant="contained" component={RouterLink} to="/">
            Back to dashboard
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default NotFound;
