import { Box, Button, Typography } from "@mui/material";
import { Robosmall2 } from "../../../../server/api/uploads/Robosmall";
import { useNavigate } from "react-router";

export const HeroBanner = () => {
  const navigate = useNavigate();

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
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
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
          sx={{ width: "fit-content", borderRadius: "100px" }}
          onClick={() => navigate("/products")}
        >
          Get Started
        </Button>
      </Box>
      <Box component="div" sx={{ width: "50%" }}>
        <img src={Robosmall2} width="100%" />
      </Box>
    </Box>
  );
};
