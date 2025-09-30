import * as React from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

export default function Reports() {
  const [tab, setTab] = React.useState(0);
  const data = [
    { month: "Jan", users: 1240, revenue: 18430 },
    { month: "Feb", users: 1380, revenue: 20120 },
    { month: "Mar", users: 1560, revenue: 23800 },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Reports
      </Typography>
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          aria-label="report tabs"
          variant="scrollable"
        >
          <Tab label="Overview" />
          <Tab label="Details" />
          <Tab label="Exports" />
        </Tabs>
      </Paper>

      {tab === 0 && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Monthly Performance
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell align="right">Active Users</TableCell>
                <TableCell align="right">Revenue</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((r) => (
                <TableRow key={r.month} hover>
                  <TableCell>{r.month}</TableCell>
                  <TableCell align="right">
                    {r.users.toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    ${r.revenue.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}

      {tab === 1 && (
        <Paper sx={{ p: 2 }}>
          <Stack spacing={1}>
            <Typography variant="h6">Details</Typography>
            <Typography color="text.secondary">
              Drill into specific metrics and segments. Use this page as a
              reference for composing complex views with MUI components.
            </Typography>
          </Stack>
        </Paper>
      )}

      {tab === 2 && (
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Export CSV</Button>
            <Button variant="outlined">Export PDF</Button>
          </Stack>
        </Paper>
      )}
    </Box>
  );
}
