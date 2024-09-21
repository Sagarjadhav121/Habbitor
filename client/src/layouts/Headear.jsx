import { Link } from "react-router-dom";

const Headear = () => {
  return (
    <header className="bg-pink-700 p-4 flex justify-between items-center shadow-md shadow-pink-300">
      <Link
        to="/"
        className="font-bold text-xl text-white tracking-wide uppercase"
      >
        Habbitor
      </Link>
      <div>
        <Link
          to="/signin"
          className="font-bold uppercase px-[16px] py-[8px] bg-white rounded-md text-pink-700 mr-4 hover:bg-pink-50  transition-all hover:text-pink-900"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="font-bold uppercase px-[16px] py-[8px] bg-white rounded-md text-pink-700 mr-4 hover:bg-pink-50  transition-all hover:text-pink-900"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Headear;
