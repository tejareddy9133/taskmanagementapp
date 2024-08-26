import logo from "./logo.svg";
import "./App.css";

import { Button } from "@mui/material";
import MenuAppBar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      {/* <Button variant="contained">Hello world</Button>;
       */}
      <MenuAppBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
