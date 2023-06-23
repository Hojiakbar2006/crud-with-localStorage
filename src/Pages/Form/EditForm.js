import { React, useState } from "react";
import "./Form.css";
import { PatternFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function EditForm() {
  const index = localStorage.getItem("index");
  const data = useSelector((state) => state.data);
  const navigate = useNavigate();
  const filterData = data.filter((item, i) => {
    return i === JSON.parse(index);
  });
  const [value, setValue] = useState(filterData[0] || {});

  return (
    <div className="employe">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          data[index] = value;
          localStorage.setItem("list", JSON.stringify(data));
          navigate(-1);
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
            value={value.phone}
            allowEmptyFormatting
            onValueChange={(values) => {
              const NumberValue = values.floatValue;
              setValue({ ...value, phone: NumberValue || "" });
            }}
          />
        </label>

        <button type="submit"> Edit Employee</button>
      </form>
    </div>
  );
}
