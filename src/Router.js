import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import { CreateForm } from "./Pages/Form/CreateForm";
import { View } from "./Pages/VIew/View";
import { Navbar } from "./Navbar/Navbar";
import { Config } from "./Config/Config";
import { EditForm } from "./Pages/Form/EditForm";

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
          <Route
            path="/create_form"
            element={
              <CreateForm
              />
            }
          />
          <Route
            path="/edit_form"
            element={
              <EditForm
              />
            }
          />
            <Route
              path="/"
              element={
                <View />
              }
            />
        </Routes>
        
      </div>
      <Config/>
    </>
  );
}
