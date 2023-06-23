import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { CreateForm } from "./Pages/Form/CreateForm";
import { View } from "./Pages/VIew/View";
import { Config } from "./Redux/Config";
import { EditForm } from "./Pages/Form/EditForm";
import { RootLayout } from "./RootLayout/RootLayout";

export function Router() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/create_form" element={<CreateForm />} />
        <Route path="/edit_form" element={<EditForm />} />
        <Route path="/" element={<View />} />
      </Route>
    )
  );

  return (
    <>
      <Config />
      <RouterProvider router={routes} />
    </>
  );
}
