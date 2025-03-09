import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle, BsCalendar } from "react-icons/bs";
import { GoNumber } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#66D2CE" }}
      className="border-2 border-white-200 rounded-lg px-4 py-2 m-4 relative hover:shadow-2xl text-white"
    >
      <div className="flex justify-start items-center gap-x-2">
        <GoNumber className="text-blue-700 text-2xl" />
        <h4 className="my-2 text-white-500">{book._id}</h4>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-blue-700  text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-blue-700 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BsCalendar className="text-blue-700 text-2xl" />
        <h2 className="my-1">{book.publishYear}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-green-600 hover:text-black" />
        </Link>
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-blue-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
