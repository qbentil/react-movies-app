import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({page}) => {
  return (
    <div className="w-full bg-gray-800 h-16 flex  justify-around items-center ">
      <div className="text-white flex items-center font-bold text-xl">
        <a href="https://github.com/qbentil/react-movies-app" target='_blank' rel="noreferrer">
            <BsGithub color="#fff" size={24} />
        </a>
        <span className="text-cyan-500 ml-1"> Movies</span>
      </div>
      <div className="flex items-center justify-around">
        <Link
          to="/"
          className={`mx-2 text-white font-bold pb-1 ${page === 'home' && '  border-b border-cyan-500'}`}
        >
          Home
        </Link>
        <Link
          to="/watch"
          className={`mx-2 text-white font-bold pb-1  ${page === 'watch' && 'border-b border-cyan-500'}`}
        >
          Watch
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
