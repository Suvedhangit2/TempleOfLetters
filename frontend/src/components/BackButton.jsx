import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link to={destination}>
        <IoIosArrowBack className="text-2xl hover:text-blue-800 cursor-pointer" />
      </Link>
    </div>
  );
};

export default BackButton;
