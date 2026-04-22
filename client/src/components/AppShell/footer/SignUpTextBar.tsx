import { Box, Button, TextField, Typography } from "@mui/material";
import LiveIncLogo from "../../../assets/LiveIncLogo.svg";
export const SignUpTextBar = () => {
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <img src={LiveIncLogo} alt="Live Inc." style={{ height: "24px" }} />
          <Typography variant="h5" color="text.primary" sx={{ marginTop: 1 }}>
            Live Inc.
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="text.secondary">
          Sign up for more Live Inc. deals and promotions.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
        <TextField
          sx={{ width: "100%", borderRadius: "100px" }}
          id="outlined-basic"
          variant="outlined"
          aria-label="signup-text-field"
          size="medium"
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ padding: "0.5rem 1.5rem" }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};
