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
import CloseIcon from "@mui/icons-material/Close";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Intentionally no navigation: the Starter Template leaves routing decisions to generated apps
    console.info("Search submitted:", query);
  };

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isEditable = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || (target as any).isContentEditable);
      if (!isEditable && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
              <Box component="form" role="search" aria-label="Site search" onSubmit={onSubmitSearch}>
                <TextField
                  id="app-header-search"
                  inputRef={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  label="Search"
                  placeholder="Search"
                  size="small"
                  fullWidth
                  aria-describedby="app-header-search-hint"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" aria-hidden />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {query && (
                          <IconButton aria-label="Clear search" onClick={() => setQuery("")} edge="end" size="small">
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                    inputProps: { "aria-keyshortcuts": "/", spellCheck: false },
                  }}
                  helperText="Press / to focus search"
                  FormHelperTextProps={{ id: "app-header-search-hint" }}
                />
              </Box>
            </Box>

            <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
              <Tooltip title="Notifications">
                <IconButton size="large" color="inherit" aria-label="Open notifications">
                  <Badge color="error" variant="dot">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title="Account">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  color="inherit"
                  aria-label="Open account menu"
                  aria-controls={anchorElUser ? "account-menu" : undefined}
                  aria-haspopup="menu"
                  aria-expanded={anchorElUser ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                id="account-menu"
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
