import { Container } from "@mui/material";
import "../../styles/landing/index.css";
import { DiscoverSection } from "./DiscoverSection";
import { HeroBanner } from "./HeroBanner";
import { PromotionalBanner } from "./PromotionalBanner";
export const Home = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <HeroBanner />
      <DiscoverSection />
      <PromotionalBanner />
    </Container>
  );
};
