import Header from "./header/Header";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Stack from "@mui/material/Stack";
function App() {
  return (
    <Stack>
      <Header />
      <Home />
      <About />
    </Stack>
  );
}

export default App;
