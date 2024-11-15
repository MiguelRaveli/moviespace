import { toast } from "react-toastify";

export const addToFavorite = (movie) => {
  const myList = localStorage.getItem("@movies");

  let savedMovies = JSON.parse(myList) || [];

  const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movie.id);

  if (hasMovie) {
    toast.warn("Movie Already Added");
    return;
  }

  savedMovies.push(movie);
  localStorage.setItem("@movies", JSON.stringify(savedMovies));
  toast.success("Movie Add to Favorites");
};
