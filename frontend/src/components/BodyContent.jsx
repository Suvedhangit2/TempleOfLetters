import React from "react";
import Spinner from "./Spinner.jsx";
import BooksTable from "./home/BooksTable.jsx";
import BooksCard from "./home/BooksCard.jsx";

const BodyContent = ({ loading, books, CardView }) => {
  return (
    <div
      style={{ backgroundColor: "#B4EBE6" }}
      className=" min-h-screen bg-green-300 p-6"
    >
      <div>
        <h2 className="text-xl text-[#2DAA9E] font-bold mb-2">Books</h2>
        <hr className="border-t-2 border-[#2DAA9E] mb-4" />
      </div>

      <div className="mt-6">
        {loading ? (
          <Spinner />
        ) : CardView ? (
          <BooksCard books={books} />
        ) : (
          <BooksTable books={books} />
        )}
      </div>
    </div>
  );
};

export default BodyContent;
