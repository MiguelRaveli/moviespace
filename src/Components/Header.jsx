import { NavLink } from "react-router-dom";
import { PiFilmReelFill } from "react-icons/pi";
const Header = () => {
  return (
    <>
      <header className="flex flex-wrap justify-around items-center w-full h-20 bg-[#202020] border-b border-[#FF9800] text-white">
        <NavLink
          className={
            "text-lg 2xl:text-xl font-bold text-[#FF9800] flex justify-center items-center gap-1"
          }
          to={"/"}
        >
          <i>
            <PiFilmReelFill />
          </i>{" "}
          MOVIESPACE
        </NavLink>

        <div className="flex justify-center items-center gap-6">
          <NavLink
            className={
              "text-[#FF9800] border-2 border-[#FF9800] px-4 py-1 rounded-2xl hover:bg-[#FF9800] hover:text-[#202020] transition  duration-200 ease-in-out"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={
              "border bg-[#FF9800] text-[#202020] px-4 py-1 rounded-2xl hover:bg-[#202020] hover:text-[#FF9800] hover:border border-[#FF9800] transition  duration-200 ease-in-out"
            }
            to={"/favorites"}
          >
            Favorites
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
