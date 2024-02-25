import { Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { SessionProvider } from "./context/SessionContext";

function App() {
  return (
    <SessionProvider>
      <Box sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <Sidebar />
        <Home />
      </Box>
    </SessionProvider>
  );
}

export default App;
