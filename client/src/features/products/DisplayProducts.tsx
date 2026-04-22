import { Box, Typography } from "@mui/material";
import { GenericCard } from "../../components";
// import { GetProducts } from "./api/useProductsApi";
import { getProducts } from "./api/getProducts";
import { useEffect, useState } from "react";
import type { Product } from "./api/types/product.type";


export const DisplayProducts = () => {
  // const products = getProducts();
  const [products, setProducts] = useState<Product[]>([]);
  // console.log(products)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res)
        console.log(res)
      } catch (err) {
        console.log("Error: ", err);
        throw err
      }
    };
    fetchProducts()
  }, [])

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
          key={product.ProductID}
          media={
            <img
              src={product.ProductImg?.[0] ?? ""}
              alt={product.ProductName}
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
                <Typography variant="body1">{product.ProductName}</Typography>
              </Box>
              <Box component="div">
                <Typography variant="body1">{product.Price}</Typography>
              </Box>
            </Box>
          }
        />
      ))}
    </Box>
  );
};
