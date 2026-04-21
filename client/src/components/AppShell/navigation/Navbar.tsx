import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import LiveIncLogo from "../../../assets/LiveIncLogo.svg";
import { iconList, navItemList } from "./items";

export const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      aria-label="navbar"
      sx={{ height: "4rem", justifyContent: "center" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <RouterLink to="/" style={{ textDecoration: "none", color: "#1D1B20" }}>
          <Typography variant="subtitle2"
            sx={{
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img src={LiveIncLogo} alt="Live Inc." style={{ height: "26px" }} />
            Live Inc.
          </Typography>
        </RouterLink>
        <Stack spacing={2} direction="row">
          {navItemList.map((item) => (
            <RouterLink
              key={item.key}
              aria-label={item.key}
              style={{
                textDecoration: "none",
                color: "#625B71",
                fontSize: "14px",
              }}
              to={item.href}
            >
              {item.label}
            </RouterLink>
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          {iconList.map((item) => (
            <RouterLink key={item.key} aria-label={item.key} to={item.href}>
              <IconButton aria-label={item.key}>{item.icon}</IconButton>
            </RouterLink>
          ))}
        </Stack>
      </Container>
    </AppBar>
  );
};
