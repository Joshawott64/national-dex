import { Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  // invoke useNavigate
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-center place-items-center z-50 h-24 w-full bg-primary drop-shadow-lg">
      <div className="absolute w-full h-4 bg-black"></div>
      <div className="absolute flex justify-center place-items-center left-2 h-10 w-10 rounded-full bg-black">
        <div className="h-7 w-7 rounded-full bg-navbar-circle"></div>
        <div className="absolute top-2 right-2.5 h-3 w-2 rounded-full bg-white -rotate-45"></div>
      </div>
      <div className="flex justify-center place-items-center h-full w-full">
        <p
          id="title"
          onClick={() => navigate("/")}
          className="font-extrabold text-4xl text-title-yellow italic tracking-tighter cursor-pointer drop-shadow-lg"
        >
          NationalDex.com
        </p>
      </div>
    </div>
  );
};

export default Navbar;
