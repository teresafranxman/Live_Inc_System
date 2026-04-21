import { Box, Container, Typography } from "@mui/material";
import { DisplayProducts } from "./DisplayProducts";
import { RatingFilter } from "./ProductsFilter";
import { BreadCrumbs } from "../../components/ui/Breadcrumbs";

export const ProductPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        marginTop: "5rem",
      }}
    >
      <BreadCrumbs/>
      <Typography variant="h4" component="h1" gutterBottom>
        Explore Products
      </Typography>
      <Box component="div" sx={{ display: "flex", gap: 4 }}>
        <Box component="div" sx={{ width: "20%" }}>
          <RatingFilter />
        </Box>
        <DisplayProducts />
      </Box>
    </Container>
  );
};
