import React, { useState, useEffect } from "react";
import axios from "axios";
import Links from "./Links.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar.jsx";
import Spinner from "../components/Spinner.jsx";
import Footer from "../components/Footer.jsx";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(Links.server_Link+`/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(Links.server_Link+`/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited successfully", { variant: "success" });
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
      <div style={{ backgroundColor: "#B4EBE6" }} className="min-h-screen p-6">
        <div>
          <h2 className="text-xl text-[#2DAA9E] font-bold mb-2">Edit Book</h2>
          <hr className="border-t-2 border-[#2DAA9E] mb-4" />
        </div>

        {loading ? <Spinner /> : ""}
        <div
          style={{ backgroundColor: "#66D2CE" }}
          className="flex flex-col border-2 border-blue-300 bg-blue-50 rounded-lg w-[400px] p-8 mx-auto"
        >
          <div>
            <h2 className="text-center font-bold text-blue-700">
              Edit Book Info
            </h2>
          </div>
          <div className="my-4">
            <label className="text-l mr-4 font-bold text-blue-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-1 border-white rounded-md px-4 py-1 w-full"
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
              className="border-1 border-white rounded-md px-4 py-1 w-full"
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
              className="border-1 border-white rounded-md px-4 py-1 w-full"
            />
          </div>
          <button
            className="p-2 bg-green-500 text-white hover:bg-green-600 m-8 rounded-lg"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditBook;
