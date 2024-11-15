import { useEffect, useState } from "react";

import CardFavoriteMovies from "../Components/CardFavoriteMovies";
import { toast } from "react-toastify";
import NotFoundFavoriteMovies from "../Components/NotFoundFavoriteMovies";

const FavoritesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@movies");
    setMovies(JSON.parse(myList) || []);
  }, []);

  const removeMovie = (id) => {
    let filteredMovies = movies.filter((item) => {
      return item.id !== id;
    });

    setMovies(filteredMovies);
    localStorage.setItem("@movies", JSON.stringify(filteredMovies));
    toast.success("Movie removed sucessfully!");
  };
  return (
    <>
      <div className="grid grid-cols-1">
        {movies.length ? (
          <>
            <h1 className="bg-[#202020] text-center p-10 w-full text-white text-2xl font-bold">
              Favorites
            </h1>

            {movies.map((movie) => {
              return (
                <CardFavoriteMovies
                  removeMovie={removeMovie}
                  movie={movie}
                  key={movie.id}
                />
              );
            })}
          </>
        ) : (
          <>
            <NotFoundFavoriteMovies />
          </>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;
