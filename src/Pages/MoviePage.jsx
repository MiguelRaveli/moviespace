import React, { useEffect, useState } from "react";
import CardMovieDetails from "../Components/CardMovieDetails";
import api from "../services/api";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import MoreMovies from "../Components/MoreMovies";

const MoviePage = () => {
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadMovies = async () => {
      const res = await api.get(`movie/${id}`, {
        params: {
          api_key: "7d698b180844208c016ac1118ff91e9b",
          page: 1,
        },
      });

      setMovies(res.data);
      setLoading(false);
      console.log(res.data);
    };

    loadMovies();
  }, [id]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CardMovieDetails movie={movie} />
          <MoreMovies />
        </>
      )}
    </>
  );
};

export default MoviePage;
