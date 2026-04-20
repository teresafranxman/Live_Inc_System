import { Container } from "@mui/material";
import { HeroBanner } from "./HeroBanner";
import { PowerUpSection } from "./DiscoverSection";
import '../../styles/landing/index.css';

export const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <HeroBanner />
      <PowerUpSection />
    </Container>
  );
};
