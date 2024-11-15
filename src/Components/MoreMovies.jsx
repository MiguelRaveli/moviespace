import React, { useEffect, useState } from "react";
import api from "../services/api";

import Spinner from "./Spinner";
import CardMoreMovies from "./CardMoreMovies";
import PaginationsMoreMovies from "./PaginationsMoreMovies";
const MoreMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previousSlice, setPreviousSlice] = useState(0);
  const [nextSlice, setNextSlice] = useState(6);

  useEffect(() => {
    const loadMovies = async () => {
      const res = await api.get("movie/now_playing", {
        params: {
          api_key: "7d698b180844208c016ac1118ff91e9b",
          page: 1,
        },
      });

      setMovies(res.data.results.slice(previousSlice, nextSlice));
      setLoading(false);
    };

    loadMovies();
  }, [previousSlice, nextSlice]);
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <h1 className="text-center p-5 bg-[#202020] text-white font-bold border-t">
            More Titles
            <PaginationsMoreMovies
              nextSlice={nextSlice}
              previousSlice={previousSlice}
              setNextSlice={setNextSlice}
              setPreviousSlice={setPreviousSlice}
            />
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {movies.map((movie) => {
              return <CardMoreMovies movie={movie} key={movie.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default MoreMovies;
