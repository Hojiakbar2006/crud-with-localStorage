import React from "react";
import "./Form.css";

export function Form() {
  return (
    <form>
      <label>
        Name
        <input type="text" placeholder="Enter Name" />
      </label>
      <label>
        Email
        <input type="text" placeholder="Enter Email" />
      </label>
      <label>
        Address
        <input type="text" placeholder="Enter Address" />
      </label>
      <label>
        Phone
        <input type="text" placeholder="Enter Phone" />
      </label>

      <button type="submit"> Add Employee</button>
    </form>
  );
}
