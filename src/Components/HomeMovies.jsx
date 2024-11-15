import React, { useEffect, useState } from "react";
import api from "../services/api";
import CardMovie from "./CardMovie";
import Spinner from "./Spinner";
import Paginations from "./Paginations";
import Categories from "./Categories";
const HomeMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("now_playing");
  const [previousSlice, setPreviousSlice] = useState(0);
  const [nextSlice, setNextSlice] = useState(10);

  useEffect(() => {
    const loadMovies = async () => {
      const res = await api.get(`movie/${category}`, {
        params: {
          api_key: "7d698b180844208c016ac1118ff91e9b",
          page: 1,
        },
      });

      setMovies(res.data.results.slice(previousSlice, nextSlice));
      setLoading(false);
    };

    loadMovies();
  }, [category, nextSlice, previousSlice]);
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="grid grid-cols-1">
            <Categories setCategory={setCategory} />
            {movies.map((movie) => {
              return <CardMovie movie={movie} key={movie.id} />;
            })}
          </div>
          <Paginations
            nextSlice={nextSlice}
            previousSlice={previousSlice}
            setNextSlice={setNextSlice}
            setPreviousSlice={setPreviousSlice}
          />
        </>
      )}
    </>
  );
};

export default HomeMovies;
