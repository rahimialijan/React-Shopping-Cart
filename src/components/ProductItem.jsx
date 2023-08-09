import { Card, Button } from "react-bootstrap";
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
            <div className="text-white">test</div>
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
