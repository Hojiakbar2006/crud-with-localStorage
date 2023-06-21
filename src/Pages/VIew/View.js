import React from "react";
import "./View.css";

import editIcon from "./edit.svg";
import deleteIcon from "./delete.svg";

export function View({ data, deleteList, editList }) {
  return (
    <>
      <div className="view">
        <table>
          <tr className="thead">
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
          {data.length < 1 && (
            <tr>
              <th colSpan={5}>No Employe</th>
            </tr>
          )}

          {data.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.address}</th>
                <th>{item.phone}</th>
                <th className="btn-gr">
                  <button onClick={() => editList(item.id)}>
                    <img src={editIcon} alt="" />
                  </button>
                  <button onClick={() => deleteList(item.id)}>
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
