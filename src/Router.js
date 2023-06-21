import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import { Form } from "./Pages/Form/Form";
import { View } from "./Pages/VIew/View";
import { Navbar } from "./Navbar/Navbar";
import { useEffect, useState } from "react";

export function Router() {
  const location = useLocation().pathname;
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <Navbar />
      <div className="employe">
        {location === "/create_form" ? (
          <h1>Create Employe</h1>
        ) : (
          <h1>Manage Employees</h1>
        )}

        <Routes>
          <Route
            path="/create_form"
            element={<Form data={data} setData={setData} />}
          />
          <Route path="/" element={<View data={data} />} />
        </Routes>
      </div>
    </>
  );
}
