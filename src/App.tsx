import "./styles.css";
import "./reset.css";

import { Container } from "@mui/material";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/works";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container component={"main"} id="bg-container">
      <Header />
      <Home />
      <About />
      <Works />
      <Footer />
    </Container>
  );
};

export default App;
