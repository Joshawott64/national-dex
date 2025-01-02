import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import NewTeamPage from "./pages/NewTeamPage.jsx";
import EditTeamPage from "./pages/EditTeamPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="pokemon/:id" element={<PokemonPage />} />
      <Route path="teams" element={<TeamsPage />} />
      <Route path="teams/create" element={<NewTeamPage />} />
      <Route path="teams/edit/:id" element={<EditTeamPage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
