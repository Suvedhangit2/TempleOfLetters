import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2DAA9E" }} className="text-white p-6">
      <div className="container mx-auto text-center">
        {/* Book Store Info */}
        <p className="text-lg font-semibold">Temple Of Letters</p>
        <p className="text-sm text-gray-200">
          Your favorite place to find amazing books.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center gap-4 my-4">
          <a href="/about" className="hover:text-orange-600">
            About
          </a>
          <a href="/books" className="hover:text-orange-600">
            Books
          </a>
          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a>
          <a href="/faq" className="hover:text-orange-600">
            FAQ
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 my-4 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/suvedhan-e"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Temple Of Letters. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
