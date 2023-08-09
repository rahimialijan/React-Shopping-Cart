import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getProductData } from "../data/items";

const CartProduct = ({ id, quantity }) => {
  const carts = useContext(CartContext);
  const productData = getProductData(id);
  return (
    <>
      <p>{productData.title}</p>
      <p> تعداد: {quantity}</p>
      <p>قیمت: {quantity * productData.price}</p>
      <Button
        size="sm"
        className="mb-f text-white"
        variant="btn btn-outline-secondary"
        onClick={() => carts.deleteFromCart(id)}
      >
        حذف
      </Button>
    </>
  );
};

export default CartProduct;
