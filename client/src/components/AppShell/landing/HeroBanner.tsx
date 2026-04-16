import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { DoofRobot } from "../../../assets";

export const HeroBanner = () => {
  return (
    <Box sx={{ marginTop: "5rem" }} component="section">
      <Card sx={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", height: "80vh", background: "hero.main"}}>
        <CardMedia component="img" image={DoofRobot} height="100%" sx={{ height: "100%", objectFit: "contain", objectPosition: "center" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: "4rem"}}>
          <Typography variant="h1">LIMITED TIME GADGET SALE</Typography>
          <Typography variant="h3">
            Get 30% off on all gadgets and inators
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ width: "fit-content", borderRadius: "50px"}}>
            Get Started
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
