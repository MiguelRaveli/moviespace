import React from "react";

const Categories = ({ setCategory }) => {
  const liClass =
    "text-white border px-2 py-1 rounded-xl hover:cursor-pointer hover:bg-[#FF9800] hover:border-[#FF9800] hover:text-[#202020] transition duration-150 ease-in-out";
  return (
    <ul className="flex flex-wrap gap-5 justify-center items-center bg-[#202020] text-center p-10 w-full text-white text-sm font-bold">
      <h1>Categories: </h1>
      <li onClick={() => setCategory("now_playing")} className={liClass}>
        Now Playing
      </li>
      <li onClick={() => setCategory("popular")} className={liClass}>
        Popular
      </li>
      <li onClick={() => setCategory("top_rated")} className={liClass}>
        Top Rated
      </li>
      <li onClick={() => setCategory("upcoming")} className={liClass}>
        Upcoming
      </li>
    </ul>
  );
};

export default Categories;
