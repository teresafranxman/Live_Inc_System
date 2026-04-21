import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const PromotionalBanner = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        height: "278px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        background: "#EDE7F6",
        borderRadius: "20px",
      }}
    >
      <Typography variant="h2" align="center" color="text.primary">
        Unlock 30% Off <br /> Smart Tech Gadgets
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ width: "fit-content", borderRadius: "100px" }}
        onClick={() => navigate("/products")}
      >
        Shop Now
      </Button>
    </Box>
  );
};
