import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="px-4 py-6 border-t border-[#FF9800] bg-[#202020] flex flex-col justify-center items-center text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © All Rights Reserved.
          <div className="flex gap-5 text-2xl my-2 justify-center text-white">
            <Link to={"https://www.linkedin.com/in/miguel-raveli-gusmao/"}>
              <FaLinkedin />
            </Link>
            <Link to={"https://github.com/MiguelRaveli"}>
              <FaGithub />
            </Link>
          </div>
        </span>
      </div>
    </>
  );
};

export default Footer;
