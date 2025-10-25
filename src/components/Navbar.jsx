import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 bg-indigo-900 py-4 text-white shadow-md">
      <Link to="/" className="hover:text-yellow-300 transition">
        Home
      </Link>
      <Link to="/report" className="hover:text-yellow-300 transition">
        Report Issue
      </Link>
      <Link to="/report-issue">Report</Link>
      <Link to="/view" className="hover:text-yellow-300 transition">
        View Issues
      </Link>
      <Link to="/dashboard" className="hover:text-yellow-300 transition">
        Dashboard
      </Link>
      <Link to="/about" className="hover:text-yellow-300 transition">
        About
      </Link>
      <Link to="/contact" className="hover:text-yellow-300 transition">
        Contact
      </Link>
    </nav>
  );
}
