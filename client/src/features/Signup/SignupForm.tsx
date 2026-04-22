import { Box, Button, TextField, Typography } from "@mui/material";
import LiveIncLogo from "../../assets/LiveIncLogo.svg";

export const SignupForm = () => {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 4,
        border: "1px solid #F5EFF7",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box component="div">
        <img src={LiveIncLogo} alt="Live Inc." style={{ height: "24px" }} />
      </Box>
      <Typography variant="h3" color="text.primary">
        Sign up for an account
      </Typography>
      <TextField
        fullWidth
        label="First Name"
        variant="outlined"
        margin="normal"
        defaultValue=""
      />
      <TextField
        fullWidth
        label="Last Name"
        variant="outlined"
        margin="normal"
        defaultValue=""
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        defaultValue=""
      />
      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
      />
      <Box component="div">
        <Typography variant="body2" color="text.secondary">
          Already have an account? <a href="/signin">Log In</a>
        </Typography>
      </Box>
      <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Box>
  );
};
