import { ProductsFilter } from "./ProductsFilter";
import { DisplayProducts } from "./DisplayProducts";
import { Box } from "@mui/material";

export const ProductPage = () => {
  return (
    <Box
      component="section"
      sx={{ display: "flex", gap: "4rem", marginTop: "5rem" }}
    >
      <ProductsFilter />
      <DisplayProducts />
    </Box>
  );
};
