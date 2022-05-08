import { Link } from "react-router-dom";

const MovieItem = ({ poster, src, title }) => {
  return (
    <div className="w-[28rem] min-h-[18rem] bg-white rounded-lg">
      <video
        className="w-full h-[80%] bg-black rounded-t-lg cursor-pointer"
        poster={poster}
        // controls
        src={src}
      />
      <Link to='/watch'>
        <div className="h-[20%] ">
          <p className="text-xl my-5 mb-10 font-semibold text-blue-900">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
