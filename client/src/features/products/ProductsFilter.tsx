import { Box, Checkbox, Rating, Typography } from "@mui/material";
import '../../styles/products/index.css';

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
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value={5}
            slotProps={{ input: { "aria-label": "Checkbox A" } }}
          />
          <Rating name="read-only" readOnly defaultValue={5} size="small" />
        </Box>
        <Box component="div">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value={4}
            slotProps={{ input: { "aria-label": "Checkbox B" } }}
          />
          <Rating name="read-only" readOnly defaultValue={4} size="small" />
        </Box>
        <Box component="div">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value={3}
            slotProps={{ input: { "aria-label": "Checkbox C" } }}
          />
          <Rating name="read-only" readOnly defaultValue={3} size="small" />
        </Box>
        <Box component="div">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value={2}
            slotProps={{ input: { "aria-label": "Checkbox D" } }}
          />
          <Rating name="read-only" readOnly defaultValue={2} size="small" />
        </Box>
        <Box component="div">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value={1}
            slotProps={{ input: { "aria-label": "Checkbox E" } }}
          />
          <Rating name="read-only" readOnly defaultValue={1} size="small" />
        </Box>
      </Box>

      <Box component="div">
        <Typography variant="body2">Price</Typography>
        <Box component="div" className="checkbox-container">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value="$50 - $100"
            slotProps={{ input: { "aria-label": "Checkbox F" } }}
          />
          <Typography variant="body2">$50 - $100</Typography>
        </Box>
        <Box component="div" className="checkbox-container">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value="$100 - $300"
            slotProps={{ input: { "aria-label": "Checkbox G" } }}
          />
          <Typography variant="body2">$100 - $300</Typography>
        </Box>
        <Box component="div" className="checkbox-container">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value="$300 - $500"
            slotProps={{ input: { "aria-label": "Checkbox H" } }}
          />
          <Typography variant="body2">$300 - $500</Typography>
        </Box>
        <Box component="div" className="checkbox-container">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value="$500 - $700"
            slotProps={{ input: { "aria-label": "Checkbox I" } }}
          />
          <Typography variant="body2">$500 - $700</Typography>
        </Box>
        <Box component="div" className="checkbox-container">
          <Checkbox
            sx={{
              color: "#4A4459",
              "&.Mui-checked": {
                color: "text.primary",
              },
            }}
            size="small"
            value="Over $700"
            slotProps={{ input: { "aria-label": "Checkbox J" } }}
          />
          <Typography variant="body2">Over $700</Typography>
        </Box>
      </Box>
    </Box>
  );
};
