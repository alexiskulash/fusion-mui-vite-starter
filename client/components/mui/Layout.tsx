import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Container,
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" noWrap sx={{ flexShrink: 0 }}>
              Aurora Dashboard
            </Typography>

            <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }}>
              <TextField
                size="small"
                placeholder="Search…"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
              <Tooltip title="Notifications">
                <IconButton size="large" color="inherit">
                  <Badge color="error" variant="dot">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title="Account">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} color="inherit">
                  <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>Settings</MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
              </Menu>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, pt: 10, pb: 4 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
}
