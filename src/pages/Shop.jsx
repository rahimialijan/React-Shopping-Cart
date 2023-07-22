import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/productItem";
import { ProductList } from "../data/items";

const Shop = () => {
  return (
    <Row xs={1} md={4} className="g-4">
      {ProductList.map((item) => (
        <Col align="center" key={item.id}>
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>
  );
};

export default Shop;
