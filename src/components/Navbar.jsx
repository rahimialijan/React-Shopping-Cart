import { useState, useContext } from "react";
import { Navbar as NavbarBS, Button, Modal } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const carts = useContext(CartContext);

  const ProductCounts = carts.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavbarBS className="border-bottom border-secondary">
        <NavbarBS.Collapse className="justify-content-end">
          <Button
            onClick={handleShowModal}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ({ProductCounts}) <BsCart className="mx-2" /> سبد خرید
          </Button>
        </NavbarBS.Collapse>
      </NavbarBS>
      <Modal
        contentClassName="card-bg"
        dir="rtl"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header>
          <Modal.Body>
            {ProductCounts > 0 ? (
              <>
                <h3 className="mb-4">سبد خرید</h3>
                {carts.items.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  ></CartProduct>
                ))}
              </>
            ) : (
              <h3 className="mb-4">سبد خرید خالی است</h3>
            )}
            <h3>مجموع قیمت: {carts.getTotalAmount()}</h3>
            <Button
              onClick={handleCloseModal}
              variant="btn btn-outline-secondary"
              className="mt-4 mx-3 text-white"
            >
              بستن
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Navbar;
