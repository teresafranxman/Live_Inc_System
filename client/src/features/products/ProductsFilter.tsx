import { Box, Checkbox, FormControlLabel, Rating } from "@mui/material";

export const ProductsFilter = () => {
  return (
    <Box component="aside">
      <Box component="div">
        <FormControlLabel control={<Checkbox />} label="Checkbox" />
        <Rating name="read-only" readOnly defaultValue={5} size="small" />
      </Box>
      <Box component="div">
        <FormControlLabel control={<Checkbox />} label="Checkbox" />
        <Rating name="read-only" readOnly defaultValue={4} size="small" />
      </Box>
      <Box component="div">
        <FormControlLabel control={<Checkbox />} label="Checkbox" />
        <Rating name="read-only" readOnly defaultValue={3} size="small" />
      </Box>
      <Box component="div">
        <FormControlLabel control={<Checkbox />} label="Checkbox" />
        <Rating name="read-only" readOnly defaultValue={2} size="small" />
      </Box>
      <Box component="div">
        <FormControlLabel control={<Checkbox />} label="Checkbox" />
        <Rating name="read-only" readOnly defaultValue={1} size="small" />
      </Box>
    </Box>
  );
};
