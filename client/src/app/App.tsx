import { Container } from "@mui/material";
import { Footer, Navbar } from "../components/AppShell";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <Navbar />
      <AppRoutes />
      <Footer />
    </Container>
  );
}

export default App;
