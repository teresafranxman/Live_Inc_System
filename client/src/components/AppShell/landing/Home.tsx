import { Container } from "@mui/material";
import { HeroBanner } from "./HeroBanner";

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <HeroBanner />
      <h1>Home</h1>
    </Container>
  );
};
