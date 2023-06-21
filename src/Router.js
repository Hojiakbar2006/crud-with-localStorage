import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import { Form } from "./Pages/Form/Form";
import { View } from "./Pages/VIew/View";
import { Navbar } from "./Navbar/Navbar";

export function Router() {
  const location = useLocation().pathname;

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
          <Route path="/create_form" element={<Form />} />
          <Route path="/" element={<View />} />
        </Routes>
      </div>
    </>
  );
}
