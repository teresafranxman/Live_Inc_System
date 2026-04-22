import { Footer, Navbar } from "../components/AppShell";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
