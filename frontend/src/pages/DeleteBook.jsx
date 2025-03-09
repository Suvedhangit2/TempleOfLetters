import React, { useState } from "react";
import axios from "axios";
import Links from "./Links";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Footer from "../components/Footer";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(Links.server_Link+`/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
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
      <div
        style={{ backgroundColor: "#B4EBE6" }}
        className="min-h-screen bg-green-300 p-6"
      >
        <div>
          <h2 className="text-xl text-[#2DAA9E] font-bold mb-2">Delete Book</h2>
          <hr className="border-t-2 border-[#2DAA9E] mb-4" />
        </div>
        {loading ? <Spinner /> : ""}
        <div
          style={{ backgroundColor: "#66D2CE" }}
          className="flex flex-col items-center border-2 border-blue-300 bg-blue-50 rounded-xl max-w-md w-full p-6 mx-auto"
        >
          <h3 className="text-2xl text-center font-bold text-blue-700">
            Do you want to delete this book?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg min-w-[100px]"
              onClick={handleDeleteBook}
            >
              Yes
            </button>
            <Button />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeleteBook;
