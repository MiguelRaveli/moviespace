import React from "react";
import { LiaImdb } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToFavorite } from "../utils/addFavoriteMovie";

const CardMovie = ({ movie }) => {
  return (
    <>
      <section className="bg-[#202020] text-gray-400 flex flex-col justify-center items-center md:flex-row xl:px-32">
        <img
          className="w-1/2 my-5 rounded-md md:w-1/4 md:ml-10 xl:w-1/6"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title}`}
        />
        <div className="flex flex-col justify-center items-center md:items-start md:px-5 xl:px-10 w-3/4">
          <h1 className="text-white font-semibold">{movie.title}</h1>
          <ul></ul>
          <div className="flex justify-center items-center gap-2">
            <i className="text-[#FF9800] text-2xl">
              <LiaImdb />
            </i>
            <h2 className="font-bold text-[#FF9800]">{movie.vote_average}</h2>
            <FaStar className="text-[#FF9800]" />
          </div>
          <p className="text-justify">{movie.overview}</p>
          <div className="flex flex-col gap-5 my-5 md:flex-row">
            <Link
              to={`/movie/${movie.id}`}
              className="border-2 bg-white text-[#202020] py-1 px-12 rounded-2xl text-center hover:bg-[#202020] hover:border-2 hover:border-white hover:text-white transition duration-150 ease-in-out"
            >
              VIEW DETAILS
            </Link>
            <button
              onClick={() => addToFavorite(movie)}
              className="border-2 py-1 px-12 rounded-2xl text-white hover:bg-white hover:border-2 hover:border-white hover:text-[#202020] transition duration-150 ease-in-out"
            >
              ADD TO FAVORITES
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardMovie;
