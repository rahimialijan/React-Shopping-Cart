import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route index element={<Shop />} />
      </Routes>
    </Container>
  );
};

export default App;
