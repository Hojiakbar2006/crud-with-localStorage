import { useState, React } from "react";
import "./Form.css";

export function Form({ data, setData }) {
  // const [validation, setvalidation] = useState(false);
  const [value, setValue] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // if (value.name.trim() === 0) {
        //   setvalidation(true);
        // } else if (value.email.trim() === 0) {
        //   setvalidation(true);
        // } else if (value.address.trim() === 0) {
        //   setvalidation(true);
        // } else if (value.phone.trim() === 0) {
        //   setvalidation(true);
        // } else {
        //   setvalidation(false);
        // }

        setData([
          ...data,
          {
            ...value,
            id: Date.now().toString(36) + Math.random().toString(36),
          },
        ]);
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
