import { AppBar, Container, Typography, Stack, IconButton } from "@mui/material";
import { iconList, navItemList } from "./items";
import { LiveIncLogo } from "../../../assets";
import { Link as RouterLink } from "react-router";

export const Navbar = () => {
  return (
    <AppBar position="fixed" aria-label="navbar" sx={{ height: "4rem", justifyContent: 'center' }}>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <RouterLink to="/" style={{ textDecoration: 'none', color: '#000000de' }}>
          <Typography
            sx={{ fontSize: '1rem', fontWeight: 'fontWeightBold', display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={LiveIncLogo} alt="Live Inc." style={{ height: '26px' }} />
            Live, Inc.
          </Typography>
        </RouterLink>
        <Stack spacing={2} direction="row">
          {navItemList.map((item) => (
            <RouterLink key={item.key} aria-label={item.key} style={{ textDecoration: 'none', color: '#000000de' }} to={item.href}>
              {item.label}
            </RouterLink>
          ))}
        </Stack>
        <Stack direction="row" spacing={2}>
          {iconList.map((item) => (
            <RouterLink key={item.key} aria-label={item.key} to={item.href}>
              <IconButton color="secondary">
                {item.icon}
              </IconButton>
            </RouterLink>
          ))}
        </Stack>
      </Container>
    </AppBar>
  );
};
