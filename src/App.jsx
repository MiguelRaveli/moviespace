import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import NotFoundPage from "./Pages/NotFoundPage";
import FavoritesPage from "./Pages/FavoritesPage";

const App = () => {
  const routes = createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  );
  const route = createBrowserRouter(routes);
  return <RouterProvider router={route} />;
};

export default App;
