import React, { useEffect, useState } from "react";
import axios from "axios";
import Links from "./Links.jsx";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Spinner from "../components/Spinner.jsx";
import Footer from "../components/Footer.jsx";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(Links.server_Link+`/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white-500 space-y-0.5">
      <Navbar />
      <div style={{ backgroundColor: "#B4EBE6" }} className="min-h-screen p-6">
        <div>
          <h2 className="text-xl text-[#2DAA9E] font-bold mb-2">Book Info</h2>
          <hr className="border-t-2 border-[#2DAA9E] mb-4" />
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div
            style={{ backgroundColor: "#66D2CE" }}
            className="flex w-200 mx-auto flex-col text-white border-1 border-blue-400 bg-blue-50 rounded-xl w-fit p-4"
          >
            <div>
              <h2 className="text-center font-bold text-blue-700">
                {book.title}
              </h2>
            </div>
            <div className="my-4">
              <span className="text-l mr-4 text-blue-700">Title :</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-l mr-4 text-blue-700">Book Id :</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-l mr-4 text-blue-700">Author :</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-l mr-4 text-blue-700">
                Published Year :
              </span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-l mr-4 text-blue-700">Created Time : </span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-l mr-4 text-blue-700">
                Last Update Time :
              </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ShowBook;
