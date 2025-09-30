import * as React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Stack,
  Button,
  Chip,
  Avatar,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Dashboard() {
  const stats = [
    { label: "Active Users", value: "12,834", delta: "+8.2%" },
    { label: "Sessions", value: "48,210", delta: "+3.1%" },
    { label: "Revenue", value: "$128,430", delta: "+12.4%" },
    { label: "Conversion", value: "3.2%", delta: "+0.4%" },
  ];

  const tasks = [
    { title: "Prepare Q4 report", progress: 72 },
    { title: "Refactor auth flow", progress: 45 },
    { title: "Migrate billing", progress: 20 },
  ];

  const rows = [
    { id: "#10293", customer: "Acme Inc.", amount: 1840, status: "Paid" },
    { id: "#10292", customer: "Globex", amount: 920, status: "Pending" },
    { id: "#10291", customer: "Soylent", amount: 2350, status: "Paid" },
    { id: "#10290", customer: "Initech", amount: 660, status: "Failed" },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {stats.map((s) => (
          <Grid item xs={12} sm={6} md={3} key={s.label}>
            <Paper sx={{ p: 2 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {s.label}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 0.5 }}>
                    {s.value}
                  </Typography>
                </Box>
                <Chip color="primary" label={s.delta} size="small" />
              </Stack>
            </Paper>
          </Grid>
        ))}

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography variant="h6">Recent Orders</Typography>
              <Button variant="contained" color="primary">
                Export
              </Button>
            </Stack>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Order</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.id} hover>
                    <TableCell>{r.id}</TableCell>
                    <TableCell>{r.customer}</TableCell>
                    <TableCell align="right">
                      ${r.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        color={
                          r.status === "Paid"
                            ? "success"
                            : r.status === "Pending"
                              ? "warning"
                              : "error"
                        }
                        label={r.status}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Team Activity
            </Typography>
            <List>
              {["Alex", "Jamie", "Taylor", "Chris"].map((name) => (
                <ListItem key={name} disableGutters>
                  <ListItemAvatar>
                    <Avatar>{name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${name} updated a task`}
                    secondary={`${Math.floor(Math.random() * 59) + 1} min ago`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Project Progress
            </Typography>
            <Stack spacing={2}>
              {tasks.map((t) => (
                <Box key={t.title}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ mb: 0.5 }}
                  >
                    <Typography variant="body2">{t.title}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t.progress}%
                    </Typography>
                  </Stack>
                  <LinearProgress variant="determinate" value={t.progress} />
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack spacing={2} alignItems="center">
              <Typography variant="h6">Welcome back</Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Here is a quick overview of your product performance today.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained">Create report</Button>
                <Button variant="outlined">View details</Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
