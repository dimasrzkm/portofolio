import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import LinksNav from "../LinksNav/LinksNav";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="sticky top-0 z-20 flex flex-wrap items-center justify-between px-5 py-5 pt-8 bg-white sm:py-12 sm:px-28 dark:bg-slate-800 dark:text-white">
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

      <div className="flex items-center gap-x-2">
        <a
          href={"/pdf/cv_dimasrizkimahendra.pdf"}
          download="CV-DimasRizkiMahendra"
        >
          <Button classname="hidden px-4 py-2 text-white bg-indigo-500 rounded-md sm:flex sm:justify-center sm:items-center sm:gap-x-2">
            Resume
            <HiDownload />
          </Button>
        </a>

        <div className="flex justify-center items-center gap-x-2">
          <Button
            className="px-3 py-2 text-white rounded dark:text-red-500"
            onClick={handleTheme}
          >
            {theme === "dark" ? (
              <FaMoon className="text-slate-800 dark:text-white w-5 h-5" />
            ) : (
              <FaSun className="text-slate-800 dark:text-white w-6 h-6" />
            )}
          </Button>
          <Button onClick={toggleModal} classname="sm:hidden">
            <HiBars3BottomRight className="h-8 w-8" />
          </Button>
        </div>
      </div>

      {open && (
        <Nav classname="flex flex-col items-center w-full mt-6 gap-x-12 gap-y-3">
          <LinksNav />
          <a
            href={"/pdf/cv_dimasrizkimahendra.pdf"}
            download="CV-DimasRizkiMahendra"
            className="w-full"
          >
            <Button classname="flex items-center justify-center w-full px-4 py-2 text-white bg-indigo-500 rounded-md gap-x-2">
              Resume
              <HiDownload />
            </Button>
          </a>
        </Nav>
      )}
    </nav>
  );
};

export default Navbar;
