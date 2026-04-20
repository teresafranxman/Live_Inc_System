import { Box, Typography } from "@mui/material";
import { GenericCard } from "../../components";
import { GetProducts } from "./api/getProducts";

export const DisplayProducts = () => {
  const products = GetProducts();

  return (
    <Box component="section" sx={{ display: "flex", gap: 2, }}>
      {products.map((product) => (
        <GenericCard
          key={product.id}
          media={
            <img
              src={product.image?.[0] ?? ""}
              alt={product.title}
              style={{ height: "300px", background: "#fbfbfb" }}
            />
          }
          content={
            <Box component="div">
              <Typography>{product.title}</Typography>
              <Typography>{product.category}</Typography>
              <Box component="div">
                <Typography>{product.price}</Typography>
              </Box>
            </Box>
          }
        />
      ))}
    </Box>
  );
};
