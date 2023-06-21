import { useState, React } from "react";
import "./Form.css";

export function Form({ data, setData }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setData([...data, value]);
      }}
    >
      <label>
        Name
        <input
          autoComplete="off"
          onChange={(e) => {
            setValue({ ...value, name: e.target.value });
          }}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
      </label>
      <label>
        Email
        <input
          autoComplete="off"
          onChange={(e) => {
            setValue({ ...value, email: e.target.value });
          }}
          type="text"
          placeholder="Enter Email"
        />
      </label>
      <label>
        Address
        <input
          autoComplete="off"
          onChange={(e) => {
            setValue({ ...value, address: e.target.value });
          }}
          type="text"
          placeholder="Enter Address"
        />
      </label>
      <label>
        Phone
        <input
          autoComplete="off"
          onChange={(e) => {
            setValue({ ...value, phone: e.target.value });
          }}
          type="text"
          placeholder="Enter Phone"
        />
      </label>

      <button type="submit"> Add Employee</button>
    </form>
  );
}
