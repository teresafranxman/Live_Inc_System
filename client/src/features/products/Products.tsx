import { Container } from "@mui/material";
import { DisplayProducts } from "./DisplayProducts";
import { ProductsFilter } from "./ProductsFilter";

export const ProductPage = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", gap: 4, marginTop: "5rem"}}>
      <ProductsFilter />
      <DisplayProducts />
    </Container>
  );
};
