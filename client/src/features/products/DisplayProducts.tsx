import { Box, Typography } from "@mui/material";
import { GenericCard } from "../../components";
import {api} from '../../api';
// import type { Product } from "./api/types/product.type";
import { useEffect, useState } from "react";
// import { getProducts } from "./api/getProducts";

async function getProducts() {
  try {
    const res = await api.get('/api/products');
    console.log(res)
  } catch (err) {
    console.log("error: ", err)
  }
}

export const DisplayProducts = () => {
  const products = getProducts();
  console.log(products)
  
  

  return (
    <Box component="section" sx={{ display: "flex", gap: 2 }}>
      {/* {products.map((product) => (
        <GenericCard
          key={product.id}
          media={
            <img
              src={product.image[0] || ""}
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
      ))} */}
    </Box>
  );
};
