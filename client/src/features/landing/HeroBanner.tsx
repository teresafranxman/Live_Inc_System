import { Box, Button, Typography } from "@mui/material";
import { DoofRobot } from "../../assets";

export const HeroBanner = () => {
  return (
    <Box
      sx={{
        marginTop: "5rem",
        display: "flex",
        justifyContent: "space-between",
        background: "#fafafa",
        borderRadius: "1rem",
      }}
      component="section"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "center",
          padding: "2rem",
          width: "50%",
        }}
      >
        <Box component="div" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h1" color="text.primary">
            Experience The <br /> Art of Technology
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Carefully curated gadgets that blend performance, design, and <br />
            cutting-edge innovation.
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ width: "fit-content", borderRadius: "0" }}
        >
          Get Started
        </Button>
      </Box>
      <Box component="div" sx={{ width: "50%" }}>
        <img src={DoofRobot} width="100%" />
      </Box>
    </Box>
  );
};
