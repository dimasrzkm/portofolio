import { useState } from "react";
import Button from "../Button/Button";
import IconHamburger from "../Icons/Hamburger";
import Nav from "../Nav/Nav";
import LinksNav from "../LinksNav/LinksNav";
import IconDownload from "../Icons/Download";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <nav className="sticky top-0 z-20 flex flex-wrap items-center justify-between px-5 py-5 pt-8 bg-white sm:py-12 sm:px-28">
      <div className="flex items-center text-xl font-semibold gap-x-4">
        <img
          src="#"
          alt="logo"
          className="w-12 h-12 bg-gray-400 rounded-full"
        />
        <h4>Dimas</h4>
      </div>

      <Nav classname="items-center hidden nav-middle sm:flex gap-x-12">
        <LinksNav />
      </Nav>

      <Button classname="hidden px-4 py-2 text-white bg-indigo-400 rounded-md sm:flex sm:justify-center sm:items-center sm:gap-x-2">
        Resume
        <IconDownload />
      </Button>

      <Button onClick={toggleModal} classname="sm:hidden">
        <IconHamburger />
      </Button>

      {open && (
        <Nav classname="flex flex-col items-center w-full mt-6 gap-x-12 gap-y-3">
          <LinksNav />

          <a
            href={"/pdf/cv_dimasrizkimahendra.pdf"}
            download="CV-DimasRizkiMahendra"
            className="w-full"
          >
            <Button classname="flex items-center justify-center w-full px-4 py-2 text-white bg-indigo-400 rounded-md gap-x-2">
              Resume
              <IconDownload />
            </Button>
          </a>
        </Nav>
      )}
    </nav>
  );
};

export default Navbar;
