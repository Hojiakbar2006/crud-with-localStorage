import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./View.css";

export function View() {
  return (
    <>
      <div>
        <table>
          <tr className="thead">
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone</th>
            <th className="btn-gr">
              <button>
                {" "}
                <svg
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="Edit"
                >
                  <path
                    d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                    fill="#d8a353"
                    class="color000000 svgShape"
                  ></path>
                </svg>
              </button>
              <button>
                {" "}
                <svg
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Delete"
                >
                  <path
                    stroke="#f00"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 8v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8m-8 1v8m4-8v8M5 5h14M9 3h6"
                    class="colorStroke000000 svgStroke"
                  ></path>
                </svg>
              </button>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
}
