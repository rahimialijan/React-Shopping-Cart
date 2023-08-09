import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductItem({ product }) {
  const carts = useContext(CartContext);

  const productQuantity = carts.getProductQuantity(product.id);

  return (
    <Card className="mt-5 card-bg">
      <Card.Body>
        <Card.Img
          variant="top"
          src={product.image}
          height="200px"
          style={{ objectFit: "cover" }}
        ></Card.Img>
        <Card.Title align="right" className="text-light pt-4">
          {product.title}
        </Card.Title>
        <Card.Text align="right" className="text-light" dir="rtl">
          {product.price} افغانی
        </Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6" className="text-white">
                تعداد :{productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  onClick={() => carts.addItemToCart(product.id)}
                  sm="6"
                  className="mx-2 text-white"
                  variant="btn btn-outline-secondary"
                >
                  +
                </Button>
                <Button
                  onClick={() => carts.removeItemFromCart(product.id)}
                  sm="6"
                  className="mx-2 text-white"
                  variant="btn btn-outline-secondary"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              onClick={() => carts.deleteFromCart(product.id)}
              className="my-4"
              variant="btn btn-light"
            >
              حذف از سبد خرید
            </Button>
          </>
        ) : (
          <Button
            onClick={() => carts.addItemToCart(product.id)}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            افزودن به سبد خرید
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
