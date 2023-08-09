import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route index element={<Shop />} />
        </Routes>
      </Container>
    </CartProvider>
  );
};

export default App;
