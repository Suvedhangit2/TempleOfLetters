import React, { useState, useEffect } from "react";
import axios from "axios";
import Links from "./Links.jsx";
import Navbar from "../components/Navbar.jsx";
import BodyContent from "../components/BodyContent.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [CardView, setCardView] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(Links.server_Link)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white-500 space-y-0.5">
      <Navbar CardView={CardView} setCardView={setCardView} />
      <BodyContent loading={loading} books={books} CardView={CardView} />{" "}
      <Footer />
    </div>
  );
};

export default Home;
