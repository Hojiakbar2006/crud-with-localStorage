import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <h1>CRUD APP</h1>

      {location === "/create_form"||location==="/edit_form" ? (
        <button
          onClick={() => {
            navigate(-1);
            localStorage.removeItem("index")
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
