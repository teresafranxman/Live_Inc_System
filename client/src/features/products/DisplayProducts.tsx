import { Box, Typography } from "@mui/material";
import { GenericCard } from "../../components";
import { GetProducts } from "./api/useProductsApi";

export const DisplayProducts = () => {
  const products = GetProducts();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "inline-grid",
        rowGap: "14px",
        columnGap: "14px",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
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
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Box component="div">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="body2">{product.category}</Typography>
              </Box>
              <Box component="div">
                <Typography variant="body1">{product.price}</Typography>
              </Box>
            </Box>
          }
        />
      ))}
    </Box>
  );
};
