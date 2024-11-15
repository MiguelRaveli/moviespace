import React from "react";
import { Link } from "react-router-dom";

const NotFoundFavoriteMovies = () => {
  return (
    <section className="bg-[#202020] h-[90vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
            OPS...
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-white">
            No movies added.
          </p>
          <p className="mb-4 text-lg font-light text-white">
            Nothing found. You will find several cool movies on the home.
          </p>
          <Link to={"/"} className="bg-black text-white px-5 py-3 rounded-md">
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundFavoriteMovies;
