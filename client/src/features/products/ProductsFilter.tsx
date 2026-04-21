import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Rating,
  Typography,
} from "@mui/material";

export const RatingFilter = () => {
  return (
    <Box
      component="aside"
      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
    >
      <Box component="div">
        <Typography variant="body2" gutterBottom>
          Rating
        </Typography>
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox size="small" />
          <Rating name="read-only" readOnly defaultValue={5} size="small" />
        </Box>
        <Box component="div">
          <Checkbox size="small" />
          <Rating name="read-only" readOnly defaultValue={4} size="small" />
        </Box>
        <Box component="div">
          <Checkbox size="small" />
          <Rating name="read-only" readOnly defaultValue={3} size="small" />
        </Box>
        <Box component="div">
          <Checkbox size="small" />
          <Rating name="read-only" readOnly defaultValue={2} size="small" />
        </Box>
        <Box component="div">
          <Checkbox size="small" />
          <Rating name="read-only" readOnly defaultValue={1} size="small" />
        </Box>
      </Box>

      <FormControl component="fieldset">
        <Typography variant="body2">Price</Typography>
        <FormGroup aria-label="price">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Under $50"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="$50 to $100"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="$100 to $200"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Over $200"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
