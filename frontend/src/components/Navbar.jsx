import React from "react";
import { Link, useLocation } from "react-router-dom";
import BackButton from "./BackButton";
import { CiViewList } from "react-icons/ci";

const Navbar = ({ CardView, setCardView }) => {
  const location = useLocation();

  return (
    <nav
      style={{ backgroundColor: "#2DAA9E" }}
      className="relative flex items-center justify-between text-white p-8"
    >
      <div className="flex items-center gap-4">
        {location.pathname !== "/" && <BackButton destination="/" />}
        {location.pathname === "/" && (
          <CiViewList
            className="text-white-400 hover:text-blue-800 text-3xl cursor-pointer"
            onClick={() => setCardView(!CardView)}
          />
        )}
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1
          className="text-2xl md:text-4xl font-bold"
          style={{ fontFamily: "'Emblema One', cursive" }}
        >
          TEMPLE OF LETTERS
        </h1>
        <span
          className="text-sm md:text-lg tracking-wide block"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          A Book Store
        </span>
      </div>

      <div className="ml-auto flex gap-4">
        <Link
          to="/"
          className="hover:text-gray-300 font-bold text-sm md:text-base"
        >
          Home
        </Link>
        <Link
          to="/books/create"
          className="hover:text-gray-300 font-bold text-sm md:text-base"
        >
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
