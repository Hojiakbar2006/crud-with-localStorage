import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <h1
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        CRUD APP
      </h1>

      <div>
        <button
          className={
            location === "/create_form" || location === "/edit_form"
              ? "show1"
              : "hidden1"
          }
          onClick={() => {
            navigate(-1);
            localStorage.removeItem("index");
          }}
        >
          <div className="thick-arrow-left"></div> Back to page
        </button>

        <button
          className={
            location === "/create_form" || location === "/edit_form"
              ? "hidden2"
              : "show2"
          }
          onClick={() => {
            navigate("/create_form");
          }}
        >
          Create Employe
        </button>
      </div>
    </div>
  );
}
