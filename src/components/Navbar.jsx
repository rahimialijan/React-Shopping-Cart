import { useState } from "react";
import { Navbar as NavbarBS, Button, Modal } from "react-bootstrap";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
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
            <BsCart className="mx-2" />
            سبد خرید
          </Button>
        </NavbarBS.Collapse>
      </NavbarBS>
      <Modal
        contentClassName="card-bg"
        dir="rtl"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>سبد خرید</Modal.Title>
          <Modal.Body>محصول</Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Navbar;
