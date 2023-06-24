import { React, useState } from "react";
import "./Form.css";
import { PatternFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { acData } from "../../Redux/Data";

export function CreateForm() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const [value, setValue] = useState({
    id: Date.now().toString(36) + Math.random().toString(36),
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  return (
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(acData([...data, { ...value }]));
          console.log(value);

          setValue({
            id: "",
            name: "",
            email: "",
            address: "",
            phone: "",
          });
        }}
      >
        <label>
          Name
          <input
            autoComplete="off"
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
            value={value.name}
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
            value={value.email}
            type="email"
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
            value={value.address}
            type="text"
            placeholder="Enter Address"
          />
        </label>
        <label>
          Phone
          <PatternFormat
            format="+998 (##) ###-##-##"
            allowEmptyFormatting
            value={value.phone}
            onValueChange={(e) => {
              const floatValue = e.floatValue;
              setValue({ ...value, phone: floatValue || "" });
            }}
          />
        </label>

        <button type="submit"> Add Employee</button>
      </form>
  );
}
