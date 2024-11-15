import { Link } from "react-router-dom";

const CardMoreMovies = ({ movie }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="pb-10 bg-[#202020] p-2 text-center text-gray-400 flex flex-col justify-center items-center">
        <img
          className="w-1/2 my-5 rounded-md"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title}`}
        />

        <Link
          onClick={scrollToTop}
          to={`/movie/${movie.id}`}
          className="text-white font-semibold text-xs md:text-base"
        >
          {movie.title}
        </Link>
      </section>
    </>
  );
};

export default CardMoreMovies;
