import React from "react";
import "./View.css";
import { useDispatch, useSelector } from "react-redux";
import { acData } from "../../Redux/Data";
import { useNavigate } from "react-router-dom";

export function View() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.data);
  const navigate = useNavigate();

  return (
    <div className="view">
        {Data.map((item, index) => {
          const number = item.phone.toString().split("");

          const numCode = number.slice(0, 2).join("");
          const middleCode = number.slice(2, 5).join("");
          const backCode1 = number.slice(5, 7).join("");
          const backCode2 = number.slice(7, 9).join("");
          const phone = `+${998} (${numCode}) ${middleCode} ${backCode1}-${backCode2}`;
          console.log(phone);

          return (
            <div className="tBody">
              <h3>Name: {item.name}</h3>
              <h3>Email: {item.email}</h3>
              <h3>Address: {item.address}</h3>
              <h3>Phone: {phone}</h3>
              <h3 className="btn-group">
                Action:
                <div className="btn-group"><button
                  onClick={() => {
                    navigate("/edit_form");
                    localStorage.setItem("index", JSON.stringify(index));
                  }}
                >
                  <img src="./edit.svg" alt="" />
                </button>
                <button
                  onClick={() => {
                    dispatch(
                      acData(
                        Data.filter((items) => {
                          return items.id !== item.id;
                        })
                      )
                    );
                  }}
                >
                  <img src="./delete.svg" alt="" />
                </button></div>
              </h3>
            </div>
          );
        })}
    </div>
  );
}
