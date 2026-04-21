import { Box, Typography } from "@mui/material";

export const PopularSection = () => {
  return (
        <Box component="section"
            sx={{                   
                display: "flex",
                flexDirection: "column",
                gap: 4,

            }}
        >
          <Typography variant="h2" color="text.primary">  
            Popular Products
          </Typography>
          <Box component="div" sx={{ display: "flex", gap: 3 }}>
            
            </Box>
        </Box>
  );
};