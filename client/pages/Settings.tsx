import * as React from "react";
import { Box, Typography, Paper, Grid, TextField, Stack, Switch, FormControlLabel, Select, MenuItem, Button } from "@mui/material";

export default function Settings() {
  const [name, setName] = React.useState("Alexis Kulash");
  const [email, setEmail] = React.useState("alexis@example.com");
  const [themeMode, setThemeMode] = React.useState(false);
  const [timezone, setTimezone] = React.useState("UTC");

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Settings</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Profile</Typography>
            <Stack spacing={2}>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" fullWidth />
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Preferences</Typography>
            <Stack spacing={2}>
              <FormControlLabel control={<Switch checked={themeMode} onChange={(e) => setThemeMode(e.target.checked)} />} label="Enable dark mode" />
              <Select value={timezone} label="Timezone" onChange={(e) => setTimezone(e.target.value)} fullWidth>
                <MenuItem value="UTC">UTC</MenuItem>
                <MenuItem value="PST">PST (UTC-8)</MenuItem>
                <MenuItem value="EST">EST (UTC-5)</MenuItem>
              </Select>
              <Stack direction="row" spacing={2}>
                <Button variant="contained">Save changes</Button>
                <Button variant="outlined">Reset</Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
