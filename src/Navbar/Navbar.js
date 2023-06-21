import React from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <h1>CRUD APP</h1>

      {location === "/create_form" ? (
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="thick-arrow-left"></div> Back
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/create_form");
          }}
        >
          Create Employe
        </button>
      )}
    </div>
  );
}