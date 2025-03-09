import React, { useState } from "react";
import axios from "axios";
import Links from "./Links";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(Links.server_Link, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="bg-white-500 space-y-0.5">
      <Navbar />
      <div style={{ backgroundColor: "#B4EBE6" }} className="min-h-screen p-6 ">
        <div>
          <h2 className="text-xl text-[#2DAA9E] font-bold mb-2">Add Book</h2>
          <hr className="border-t-2 border-[#2DAA9E] mb-4" />
        </div>

        {loading ? <Spinner /> : ""}
        <div
          style={{ backgroundColor: "#66D2CE" }}
          className="flex flex-col border-2 border-blue-300 bg-blue-50 rounded-lg w-[400px] p-8 mx-auto"
        >
          <div>
            <h2 className="text-center font-bold text-blue-700">
              Add New Book
            </h2>
          </div>
          <div className="my-4">
            <label className="text-l mr-4 font-bold text-blue-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-1 border-white rounded-md px-4 py-1 w-full"
              placeholder="Enter book title"
            />
          </div>
          <div className="my-4">
            <label className="text-l mr-4 font-bold text-blue-700">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-1 border-white rounded-md px-4 py-1  w-full "
              placeholder="Enter author name"
            />
          </div>
          <div className="my-4">
            <label className="text-l mr-4 font-bold text-blue-700">
              Published Year
            </label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-1 border-white rounded-md px-4 py-1  w-full "
              placeholder="Enter book published year"
            />
          </div>
          <button
            className="p-2 text-white bg-green-500 hover:br-green-600 m-8 rounded-lg"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBooks;
