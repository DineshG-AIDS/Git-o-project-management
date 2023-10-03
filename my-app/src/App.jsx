import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import ProjectScreen from "./screens/prjScreen";
import ProjectsListScreen from "./screens/projectsListScreen";
import SingleProjectScreen from "./screens/SingleProjectScreen";
import SimpleRegistrationForm from "./components/singUpScreen";
import { SimpleRegistrationForm1 } from "./components/signInScreen";
import TeamScreen from "./screens/TeamScreen";
import ProfileScreen from "./screens/ProfileScreen";
// import PrivateRoute from "./components/PrivateRoute ";

function App() {
  // const userLoggedIn = localStorage.getItem("userLoggedIn");
  // console.log(userLoggedIn);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomeScreen />} />
        <Route path="/prj" element={<ProjectScreen />} />
        <Route path="/prjscr" element={<ProjectsListScreen />} />
        <Route path="/register" element={<SimpleRegistrationForm />} />
        <Route path="/login" element={<SimpleRegistrationForm1 />} />
        <Route path="/logout" element={<SimpleRegistrationForm1 />} />
        <Route path="/abt" element={<TeamScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route
          path="/project/:projectId"
          element={<SingleProjectScreen />}
        />{" "}
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
}

export default App;
