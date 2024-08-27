import logo from "./logo.svg";
import "./App.css";

import { Button } from "@mui/material";
import MenuAppBar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/Homepage";
import { AllRotes } from "./components/AllRotes";

function App() {
  return (
    <div className="App">
      {/* <Button variant="contained">Hello world</Button>;
       */}
      <MenuAppBar />
      <AllRotes />
      <Footer />
    </div>
  );
}

export default App;
