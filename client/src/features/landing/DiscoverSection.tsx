import { Box, Typography } from "@mui/material";
import { GenericCard } from "../../components";
import { CardItems } from "./types/items";

export const DiscoverSection = () => {
  return (
    <Box
      component="section"
      className="discover-section"
      sx={{ display: "flex", flexDirection: "column", gap: 5 }}
    >
      <Box
        component="header"
        className="discover-header"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Typography variant="h2" className="discover-title">
          Discover Inators
        </Typography>
        <Typography
          variant="subtitle2"
          className="discover-description"
          color="text.secondary"
        >
          Explore our collection of inators, where innovation meets performance.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {CardItems.map((product) => (
          <GenericCard
            className="discover-card"
            key={product.id}
            media={
              <img
                src={product.image?.[0] ?? ""}
                alt={product.title}
                style={{
                  height: "300px",
                  background: "#fbfbfb",
                  width: "100%",
                }}
              />
            }
            content={
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box component="div">
                  <Typography variant="body1">{product.title}</Typography>
                  <Typography variant="body2">{product.category}</Typography>
                </Box>
                <Box component="div" sx={{ textAlign: "right" }}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    ${(product.price ? product.price * 0.3 : 0).toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    ${product.price?.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            }
          />
        ))}
      </Box>
    </Box>
  );
};
