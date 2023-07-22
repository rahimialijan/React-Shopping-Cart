import { Navbar as NavbarBS, Button } from "react-bootstrap";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <NavbarBS className="border-bottom border-secondary">
      <NavbarBS.Collapse className="justify-content-end">
        <Button variant="btn btn-outline-secondary" className="text-white">
          <BsCart className="mx-2" />
          سبد خرید
        </Button>
      </NavbarBS.Collapse>
    </NavbarBS>
  );
};

export default Navbar;
