import React from "react";
import "./View.css";

import editIcon from "./edit.svg";
import deleteIcon from "./delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { acData } from "../../Redux/Data";
import { useNavigate } from "react-router-dom";

export function View() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.data);
  const navigate = useNavigate();

  return (
    <>
      <div className="view">
        <table>
          <thead>
            <tr className="thead">
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          {Data.length < 1 && (
            <tr>
              <th colSpan={5}>No Employe</th>
            </tr>
          )}
          {Data.map((item, i) => {
            return (
              <tr key={item.id}>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.address}</th>
                <th>{item.phone}</th>
                <th className="btn-gr">
                  <button
                    onClick={() => {
                      navigate("/edit_form");
                      localStorage.setItem("index", JSON.stringify(i));
                    }}
                  >
                    <img src={editIcon} alt="" />
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
                      console.log(item);
                    }}
                  >
                    <img src={deleteIcon} alt="" />
                  </button>
                </th>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
