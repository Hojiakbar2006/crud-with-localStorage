import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css"

export function RootLayout() {

  const location = useLocation().pathname

  return (
<>
<Navbar />
    <div className="employe">
      {location==="/create_form" ?(
        <h1>Create Employe</h1>
      ):(<h1>Employees</h1>)}
      
        <Outlet />
    </div></>
  );
}
