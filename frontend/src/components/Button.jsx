import React from "react";
import { Link } from "react-router-dom";

const Button = ({ destination = "/", text = "No" }) => {
  return (
    <Link
      to={destination}
      className="px-4 py-2 bg-green-500 text-white rounded-lg min-w-[100px] text-center flex justify-center"
    >
      {text}
    </Link>
  );
};

export default Button;
